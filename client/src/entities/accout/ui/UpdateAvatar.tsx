import { useState } from 'react';
import { FileInput, Button, Avatar, Group, Loader,Grid } from '@mantine/core';

function UpdateAvatar() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleFileChange = (selectedFile: any) => {
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Пожалуйста, выберите файл.');
      return;
    }

    const formData = new FormData();
    formData.append('avatar', file);

    setLoading(true);
    try {
      const response = await fetch('/api/upload/upload-avatar', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setAvatarUrl(data.url); 
      } else {
        console.error('Ошибка при загрузке файла');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Group direction="column" spacing="sm" align="center">
        <Grid>
            <Grid.Col span={12}>
        <FileInput
          accept="image/png,image/jpeg"
          placeholder="Загрузите фото"
          onChange={handleFileChange}
          disabled={loading}/>
          </Grid.Col>
          <Grid.Col span={12}>
        <Button onClick={handleUpload} disabled={!file || loading}>
          {loading ? <Loader size="xs" /> : 'Загрузить'}
        </Button>
        </Grid.Col>
        
        </Grid>
      </Group>
    </div>
  );
}

export default UpdateAvatar;
