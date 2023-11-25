import styles from './login.module.scss';
import classnames from "classnames/bind";
import {Box, Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
import {Images} from "@/shared/assets/images";

const cn = classnames.bind(styles);

const Login = () => {
    return (
        <div className={cn('login', '_page')}>
            <div className={cn('login', '_form')}>
                <img
                    height={70}
                    width='auto'
                    alt="logo"
                    src={Images.Logo}
                />
                <Box component="form" sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Логин"
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Пароль"
                        type="password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Запомнить меня"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Авторизоваться
                    </Button>
                </Box>
            </div>
        </div>
    )
}

export default Login;