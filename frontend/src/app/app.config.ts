import { provideAnimations } from '@angular/platform-browser/animations';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideTaiga, TUI_VALIDATION_ERRORS } from '@taiga-ui/core';

import { routes } from './app.routes';
import { authInterceptor } from './core/auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideAnimations(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideTaiga(),
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Поле обязательно для заполнения',
        email: 'Введите корректный email адрес',
        minlength: ({ requiredLength }: { requiredLength: number }) =>
          `Минимум ${requiredLength} символов`,
        maxlength: ({ requiredLength }: { requiredLength: number }) =>
          `Максимум ${requiredLength} символов`,
        passwordMismatch: 'Пароли не совпадают',
      },
    },
  ],
};
