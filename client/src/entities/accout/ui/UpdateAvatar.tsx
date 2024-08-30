import { useState, useRef  } from 'react';
import {  Button, Loader, FileButton, Group  } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../app/providers/store/store';
import { updateAvatar } from '../model/accoutSlice';
import {  IconDownload  } from '@tabler/icons-react';



function UpdateAvatar() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const resetRef = useRef<() => void>(null);
  const userId = useAppSelector(state => state.user.user?.id);

  const dispatch = useAppDispatch()

  const fileChange = (selectedFile: File| null): void => {
    setFile(selectedFile);
  };

  const upload = async () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('avatar', file);

    if (userId) {
      formData.append('userId', userId.toString());
    }

    setLoading(true);

    try {
      dispatch(updateAvatar(formData))
      .then(() => {
        console.log('Аватар успешно загружен');
        setFile(null);
        resetRef.current?.();
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
         <Group justify="center">
        <Button w={200} radius="md" size="md" variant="outline" color='violet'  rightSection={<IconDownload size={14} />}  onClick={upload} disabled={!file || loading}>
          {loading ? <Loader color='violet'/> : 'Загрузить'}
        </Button>
        </Group>
      )
      :
      (
        <>
      {/* <FileInput
        accept="image/png,image/jpeg"
        onChange={fileChange}
        label="Upload files"
        placeholder="Upload files"
      /> */}
      <Group justify="center">
      <FileButton  resetRef={resetRef} onChange={fileChange} accept="image/png,image/jpeg">
        {(props) => <Button {...props}  w={200} variant="outline" size="md" radius="md" color='violet'>Обновить аватарку</Button>}
      </FileButton>
    </Group>
    </>
    )}
    {loading && <Loader size="xs" />}
    </div>
  );
}

export default UpdateAvatar;
