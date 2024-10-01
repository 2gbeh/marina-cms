import React from "react";
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

const AddPostModalForm = ({ children }: { children: React.ReactNode }) => {
  console.log("🚀 ~ AddPostModalForm");
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add post</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="user_id" className="text-right">
              User ID
            </Label>
            <Select>
              <SelectTrigger className="col-span-3" id="user_id">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="body" className="text-right">
              Body
            </Label>
            <Textarea
              id="body"
              placeholder=""
              className="resize-none_ col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(AddPostModalForm);
