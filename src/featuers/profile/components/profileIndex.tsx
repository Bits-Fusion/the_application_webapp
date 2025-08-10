import ProfileInformation from "./profile-information";
import ProfileTaskView from "./profile-task-view";
import ProfileView from "./profile-view";

const ProfileIndex = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_2fr] min-h-[90dvh]">
      <div className="grid grid-rows-[1fr_3fr] gap-2">
        <div className="rounded-xl">
          <ProfileView />
        </div>
        <div className="rounded-xl">
          <ProfileInformation />
        </div>
      </div>

      <div className="grid gap-3">
        <div className=" rounded-xl">
          <ProfileTaskView />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="bg-muted/50 rounded-xl"></div>
          <div className="bg-muted/50 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIndex;
