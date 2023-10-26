import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "@nextui-org/react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa6";

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center xl:my-28">
      <div className="flex p-12 justify-center flex-wrap gap-8">
        <Card className="w-80">
          <CardHeader className="h-72 overflow-hidden">
            <img
              className="hover:scale-105 duration-150"
              src="../src/assets/images/Shayan.jpeg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Shayan Khan
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Frontent Developer
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Link href="#">
              <AiFillLinkedin size={25} />
            </Link>
            <Link href="#">
              <FaGithub size={25} />
            </Link>
            <Link href="#">
              <FaGithub size={25} />
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-80">
          <CardHeader className="h-72 overflow-hidden">
            <img
              className="hover:scale-105 duration-150 h-full"
              src="../src/assets/images/pranjal.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Pranjal Naman
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Leader / Frontend
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Link href="#">
              <AiFillLinkedin size={25} />
            </Link>
            <Link href="#">
              <FaGithub size={25} />
            </Link>
            <Link href="#">
              <FaGithub size={25} />
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-80">
          <CardHeader className="h-72 overflow-hidden">
            <img
              className="hover:scale-105 duration-150"
              src="../src/assets/images/prince.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Prince Tripathi
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Backend Developer
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Link href="#">
              <AiFillLinkedin size={25} />
            </Link>
            <Link href="#">
              <FaGithub size={25} />
            </Link>
            <Link href="#">
              <FaGithub size={25} />
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProfileCard;
