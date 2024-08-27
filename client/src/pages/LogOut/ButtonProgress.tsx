
import { useState } from 'react';
import { useInterval } from '@mantine/hooks';
import { Button, Progress, rgba } from '@mantine/core';
import classes from './ButtonProgress.module.css';


export function ButtonProgress() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const interval = useInterval(
    () =>
      setProgress((current) => {
        if (current < 100) {
          return current + 1;
        }

        interval.stop();
        setLoaded(true);
        return 0;
      }),
    20
  );

  return (
    <Button
      fullWidth
      className={classes.button}
      onClick={() => (loaded ? setLoaded(false) : !interval.active && interval.start())}
      style={{ backgroundColor: loaded ? '#008080' : '#4250a6' }} // Цвет кнопки изменен на #4250a6
    >
      <div className={classes.label}>
        {progress !== 0 ? 'Выйти' : loaded ? 'Передумал' : 'Я еще вернусь!'}
      </div>
      {progress !== 0 && (
        <Progress
          value={progress}
          className={classes.progress}
          color={rgba('#4250a6', 0.35)} // Цвет прогресса синхронизирован с кнопкой
          radius="sm"
        />
      )}
    </Button>
  );
}
