import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Button } from "~/components/_shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/_shadcn/ui/dialog";
import { Input } from "~/components/_shadcn/ui/input";
import { Label } from "~/components/_shadcn/ui/label";
import { Textarea } from "~/components/_shadcn/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/_shadcn/ui/select";
// ///////////////////////////////////////////////
import { TPost, TUsers } from "../../utils/post.interface";
import { useAddPostModalForm } from "./useAddPostModalForm";

interface IProps {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  data: { users: TUsers; post: null | TPost };
}

const AddPostModalForm: React.FC<IProps> = ({
  open,
  onClose,
  data: { users, post },
}) => {
  const { fetcher, isSubmitting, initialValues } = useAddPostModalForm(
    post,
    onClose,
  );
  console.log("🚀 ~ AddPostModalForm");
  // renders
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add post</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <fetcher.Form method="post">
          <fieldset disabled={isSubmitting}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="author" className="text-nowrap text-right">
                  Author
                </Label>
                <Select
                  name="author"
                  defaultValue={initialValues.author}
                  required
                >
                  <SelectTrigger className="col-span-3" id="author">
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent>
                    {users.map(({ id, name }) => (
                      <SelectItem key={String(id)} value={String(id)}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-nowrap text-right">
                  Post Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={initialValues.title}
                  required
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="content" className="text-nowrap text-right">
                  Post Content
                </Label>
                <Textarea
                  id="content"
                  name="content"
                  defaultValue={initialValues.content}
                  required
                  className="resize-none_ col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" name="intent" value="create">
                Save
              </Button>
            </DialogFooter>
          </fieldset>
        </fetcher.Form>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(AddPostModalForm);
