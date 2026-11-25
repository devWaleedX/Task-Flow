import SignDetails from "./SignUpComponents/SignDetails";
import SignHero from "./SignUpComponents/SignHero";

function SignUp() {
  return (
    <div className="flex">
      <SignHero></SignHero>
      <SignDetails></SignDetails>
    </div>
  );
}

export default SignUp;
