import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <Button>click me</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
