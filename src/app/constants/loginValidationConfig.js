const loginValidationConfig = {
    email: {
        isRequired: {
            message: `Поле Email обязательно к заполнению`
        },
        isEmail: {
            message: `Email введен некорректно`
        }
    },
    password: {
        isRequired: {
            message: `Поле Password обязательно к заполнению`
        },
        isCapitalSymbol: {
            message: `Password должен содержать заглавные буквы`
        },
        isConteinDigit: {
            message: `Password должен содержать цифры`
        },
        min: {
            message: `Password должен содержать минимум из восьми символов`,
            value: 8
        }
    }
};

export default loginValidationConfig;
