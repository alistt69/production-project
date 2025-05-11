export {
  IProfile,
  IProfileSchema,
} from "./model/types";

export {
  profileActions,
  profileReducer,
} from "./model/slice";

export {
  fetchProfileData
} from "./model/services/fetch-profile-data";

export { ProfileCard } from "./ui/profile-card";

// export { getProfile } from "./model/selectors/getProfile";
// export { getProfileData } from "./model/selectors/getProfileData";
// export { getProfileError } from "./model/selectors/getProfileError";
// export { getProfileLoading } from "./model/selectors/getProfileLoading";