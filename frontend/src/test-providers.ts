import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

/** Standard providers for component tests in zoneless mode */
export const TEST_PROVIDERS = [
  provideZonelessChangeDetection(),
  provideRouter([]),
  provideHttpClient(),
  provideAnimations(),
];

/** Use this schema to ignore unknown TaigaUI elements in unit tests */
export { NO_ERRORS_SCHEMA };
