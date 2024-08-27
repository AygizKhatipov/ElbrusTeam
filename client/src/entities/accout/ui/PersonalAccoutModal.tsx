import { Container, TextInput, Textarea, Button, Grid, Text , Tooltip,NativeSelect } from '@mantine/core';
import classes from '../style/UserCardImage.module.css';
import { useAppDispatch, useAppSelector } from '../../../app/providers/store/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { updateAccount } from '../model/accoutSlice';
import { UpdateAccountType } from '../types/accountType';
const popularCountries = [
    "Россия",
    "США",
    "Китай",
    "Германия",
    "Франция",
    "Индия",
    "Япония",
    "Бразилия",
    "Великобритания",
    "Канада",
    "Италия",
    "Испания",
    "Мексика",
    "Австралия",
    "Южная Корея",
    "Турция",
    "Нидерланды",
    "Швейцария",
    "Аргентина",
    "Южно-Африканская Республика"
  ];

  const popularRussianCities = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Казань",
    "Нижний Новгород",
    "Челябинск",
    "Самара",
    "Омск",
    "Ростов-на-Дону",
    "Уфа",
    "Красноярск",
    "Пермь",
    "Воронеж",
    "Волгоград",
    "Краснодар",
    "Саратов",
    "Тюмень",
    "Тольятти",
    "Ижевск"
  ];
  

type PersonalAccoutInfoProps = {
  onClose: () => void;  
};

function PersonalAccoutInfo({ onClose }: PersonalAccoutInfoProps): JSX.Element {
  const accountId = useAppSelector(state => state.account.account?.id);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<UpdateAccountType>({
    mode: "onChange",
  });

  const handlePhoneInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Заменяем все символы, не являющиеся цифрами, на пустую строку
    const numericValue = value.replace(/\D/g, '');
    setValue('phone', numericValue); // Обновляем значение телефона в форме
  };


  const updateUserInformation: SubmitHandler<UpdateAccountType> = (data) => {
    dispatch(updateAccount({ data, accountId }));
    onClose(); 
  };

  return (
    <Container className={classes.InfoContainer} size="md" my="lg">
      <Text ta="center" fz="xl" fw={500} mt="sm">Изменить информацию</Text>
      <form onSubmit={handleSubmit(updateUserInformation)}>
        <Grid>
          <Grid.Col span={6}>
          <Tooltip label={errors.firstName?.message} withArrow opened={!!errors.firstName} position="top" color="red">
            <TextInput
              label="Имя"
              placeholder="Имя"
              {...register("firstName", {
                pattern: {
                  value: /[а-яА-ЯёЁ]+/i,
                  message: 'Имя должно содержать русские буквы'
                }
              })}
            />
            </Tooltip>
          </Grid.Col>
          <Grid.Col span={6}>
          <Tooltip label={errors.lastName?.message} withArrow opened={!!errors.lastName} position="top" color="red">
            <TextInput label="Фамилия" placeholder="Фамилия" {...register("lastName", {
              pattern: {
                value: /[а-яА-ЯёЁ]+/i,
                message: 'Фамилия должна содержать русские буквы'
              }
            })} />
            </Tooltip>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={6}>
            <NativeSelect label="Город" data={popularRussianCities}  {...register("city")} />
          </Grid.Col>
          <Grid.Col span={6}>
          <NativeSelect label="Страна"  data={popularCountries} {...register("country")}/>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3}>
          <Tooltip label={errors.phone?.message} withArrow opened={!!errors.phone} position="top" color="red">
              <TextInput
                label="Номер телефона"
                type="tel"
                placeholder="+7 (999) 999-99-99"
                {...register("phone", {
                  pattern: {
                    value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                    message: "Номер телефона должен содержать 11 цифр",
                  }
                })}
                onChange={handlePhoneInputChange} 
              />
            </Tooltip>
          </Grid.Col>
          <Grid.Col span={9}>
          <Tooltip
            label={errors.email?.message}
            withArrow
            opened={!!errors.email}
            position="top"
            color="red" >
            <TextInput label="Email" placeholder="Email" {...register("email", {
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Введите корректный email",
                  },
            })} />
            </Tooltip>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col>
            <Textarea autosize minRows={3.5} size='md' label="О себе" placeholder="Напиши о себе" {...register("about")} ></Textarea>
          </Grid.Col>
        </Grid>
        <Button type="submit" fullWidth radius="md" mt="xl" size="md" color="violet" variant="outline">
          Сохранить
        </Button>
      </form>
    </Container>
  );
}

export default PersonalAccoutInfo;
