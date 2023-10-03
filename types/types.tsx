import { RootStackParamList } from "../navigation/PrivateNavigation/RootStack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
