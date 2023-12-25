import {
  addEducationActivity,
  addEmploymentActivity,
  getEmploymentIDs,
  getEducationIDs,
  getActivityIDs,
} from "./actions";
import { SubmitButton } from "../components/submit-button";

export default async function Page() {
  // async function addEducationActivityForm(formData: FormData) {
  //   "use server";

  //   const rawFormData = {
  //     activityID: String(formData.get("activityId")),
  //     educationID: String(formData.get("educationId")),
  //   };

  //   const res = await addEducationActivity(
  //     rawFormData.activityID,
  //     rawFormData.educationID
  //   );
  // }

  async function addEmploymentActivityForm(formData: FormData) {
    "use server";

    const rawFormData = {
      employmentID: String(formData.get("employmentId")),
      activityID: String(formData.get("activityId")),
    };

    const res = await addEmploymentActivity(
      rawFormData.employmentID,
      rawFormData.activityID
    );
  }

  const employmentIDs = await getEmploymentIDs();
  const educationIDs = await getEducationIDs();
  const activityIDs = await getActivityIDs();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Add Activity to Employment
      </h1>
      <form
        action={addEmploymentActivityForm}
        className="bg-gray-800 p-6 rounded-md"
      >
        <select
          name="employmentId"
          className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
        >
          <option value="">Select Employment ID</option>
          {employmentIDs.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
        <select
          name="activityId"
          className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
        >
          <option value="">Select Activity ID</option>
          {activityIDs.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
        <SubmitButton />
      </form>
      {/* <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Add Activity to Education
      </h1>
      <form
        action={addEducationActivityForm}
        className="bg-gray-800 p-6 rounded-md"
      >
        <select
          name="educationId"
          className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
        >
          <option value="">Select Education ID</option>
          {educationIDs.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
        <select
          name="activityId"
          className="block w-full p-2 mb-4 text-gray-800 bg-gray-200 rounded-md"
        >
          <option value="">Select Activity ID</option>
          {activityIDs.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
        <SubmitButton />
      </form> */}
    </div>
  );
}
