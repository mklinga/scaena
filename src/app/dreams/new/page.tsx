import { createDream } from '@/app/actions/dreamActions';
import { SuccessButton } from '@/app/components/Button';
import { TextArea, TextInput } from '@/app/components/Inputs';

export default function NewDream() {
  return (
    <form action={createDream} className="grow">
      <div className="flex flex-col">
        <label htmlFor="title" className="py-5">
          Title
        </label>
        <TextInput name="title" type="text" />
        <label htmlFor="draft" className="py-5">
          Description
        </label>
        <TextArea name="draft" rows={20} />
      </div>
      <SuccessButton type="submit">Save</SuccessButton>
    </form>
  );
}
