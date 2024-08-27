import { useState } from 'react';
import { FileInput, Button, Loader } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../app/providers/store/store';
import { updateAvatar } from '../model/accoutSlice';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';
function UpdateAvatar() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const userId = useAppSelector(state => state.user.user?.id);

  const dispatch = useAppDispatch()

  const fileChange = (selectedFile: File): void => {
    setFile(selectedFile);
  };

  const upload = async () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('avatar', file);

    if (userId) {
      formData.append('userId', userId);
    }

    setLoading(true);

    try {
      dispatch(updateAvatar(formData))
      .then(() => {
        console.log('Аватар успешно загружен');
      })
    } catch (error) {
      console.error('Ошибка загрузки аватара:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {file ? (
        <Button variant="outline" color='violet'  rightSection={<IconDownload size={14} />} fullWidth onClick={upload} disabled={!file || loading}>
          {loading ? 'Загрузка...' : 'Загрузить'}
        </Button>
      )
      :
      (
      <FileInput
        accept="image/png,image/jpeg"
        onChange={fileChange}
        label="Upload files"
        placeholder="Upload files"
      />
    )}
    {loading && <Loader size="xs" />}
    </div>
  );
}

export default UpdateAvatar;
