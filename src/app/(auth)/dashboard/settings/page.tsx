import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { Checkbox } from "@/components/shadcn/ui/checkbox";
import { Input } from "@/components/shadcn/ui/input";

export const metadata = { title: "Settings" };

export default function Settings() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Store Name</CardTitle>
          <CardDescription>
            Used to identify your store in the marketplace.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Input placeholder="Store Name" />
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter>
      </Card>
      {/*  */}
      <Card>
        <CardHeader>
          <CardTitle>Plugins Directory</CardTitle>
          <CardDescription>
            The directory within your project, in which your plugins are
            located.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <Input placeholder="Project Name" defaultValue="/content/plugins" />
            <div className="flex items-center space-x-2">
              <Checkbox id="include" defaultChecked />
              <label
                htmlFor="include"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Allow administrators to change the directory.
              </label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </>
  );
}
