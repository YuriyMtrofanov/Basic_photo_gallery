const signUpValidationConfig = {
    email: {
        isRequired: {
            message: "Поле Email обязательно для заполнения"
        },
        isEmail: {
            message: "Email введен некорректно"
        }
    },
    password: {
        isRequired: {
            message: "Поле Password обязательно для заполнения"
        },
        isCapitalSymbol: {
            message: "Пароль должен содержать хотя бы одну заглавную букву"
        },
        isContainDigit: {
            message: "Пароль должен содержать хотя бы одно число"
        },
        min: {
            message: "Пароль должен состоять минимум из 8 символов",
            value: 8
        }
    },
    firstName: {
        isRequired: {
            message: "Имя обязательно для заполнения"
        },
        min: {
            message: "Имя должно состоять минимум из 3 символов",
            value: 3
        }
    },
    lastName: {
        isRequired: {
            message: "Фамилия обязательно для заполнения"
        },
        min: {
            message: "Имя должно состоять минимум из 3 символов",
            value: 3
        }
    },
    country: {
        isRequired: {
            message: "Данное поле обязательно для заполнения"
        }
    },
    city: {
        isRequired: {
            message: "Данное поле обязательно для заполнения"
        }
    },
    img: {
        isUrl: {
            message: "Укажте ссылку на фотографию профиля"
        }
    },
    birthDate: {
        isRequired: {
            message: "Укажите дату вашего рождения"
        }
    }
};

export default signUpValidationConfig;
