import { createNavigationContainerRef, NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<Record<string, object | undefined>>()

export function navigate(name: string, params: object | undefined) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
