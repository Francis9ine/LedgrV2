import svgPaths from "./svg-g9fmbn4xd8";
import imgUserProfileAvatar from "./549959ffb4227ab88028cbf67bec9d3615477b3b.png";
import imgBackgroundImage from "./35e5e25689bb7b5572c071b060fa0240c8523b32.png";
import imgImage from "./59e1f3ad58e4e8c8edae799f364b5621d665de03.png";
import imgLedgrBusinessLogo from "./d4e08c35999603d5e2ed78f120fb023bce6e1070.png";
import imgUserProfileAvatar1 from "./e20b888a2c1c8809cba4d4f4111a00b347aefdc2.png";
import imgPortfolioChart from "./5711c32e667bdcdb5c23f7562c8db554f7acef60.png";
import imgUserProfileAvatar2 from "./8c62c5e92a6d79217b829e8f8201fe9ba03fb0e6.png";
import imgUserProfileAvatar3 from "./520bda076bcbcef59d17aff1476aeb8f16bf117d.png";
import imgUserAvatar from "./99f824efd3643d68046798b20ce25fc73e781e94.png";

function AmbientBackgroundPatternGradient() {
  return (
    <div className="absolute inset-0 overflow-x-clip overflow-y-auto" data-name="Ambient Background Pattern/Gradient">
      <div className="absolute bg-[#afefdd] blur-[50px] left-[-128px] opacity-20 rounded-[9999px] size-[896px] top-[-235.59px]" data-name="Background+Blur" />
      <div className="absolute bg-[#a3f69c] blur-[60px] opacity-15 right-[-256px] rounded-[9999px] size-[768px] top-[471.19px]" data-name="Background+Blur" />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[23.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.3333" preserveAspectRatio="none" viewBox="0 0 23.3333 23.3333" width="23.3333">
        <g id="Container">
          <path d={svgPaths.p34345a00} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#00342b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Background+Shadow">
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[32px] tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[40px]">Ledgr</p>
      </div>
    </div>
  );
}

function LogoSection() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Logo Section">
      <BackgroundShadow />
      <Heading />
    </div>
  );
}

function LogoSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="Logo Section:margin">
      <LogoSection />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Simplifying your financial life</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px] mb-0">Take control of your money with intuitive</p>
        <p className="leading-[20px]">tools and clear insights.</p>
      </div>
    </div>
  );
}

function WelcomeMessage() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[280px] relative shrink-0" data-name="Welcome Message">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function TopSpacerForBalance() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Top Spacer for balance">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[32px] relative size-full">
          <LogoSectionMargin />
          <WelcomeMessage />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00342b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[48px] items-center justify-center pb-[14.5px] pt-[13.5px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Get Started</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center pb-[14.5px] pt-[13.5px] px-px relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Log In</p>
      </div>
    </div>
  );
}

function ActionSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Action Section">
      <Button />
      <Button1 />
    </div>
  );
}

function MainContentContainer() {
  return (
    <div className="flex-[1_0_0] max-w-[448px] min-h-px relative w-[448px]" data-name="Main Content Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between max-w-[inherit] px-[48px] py-[32px] relative size-full">
          <TopSpacerForBalance />
          <ActionSection />
        </div>
      </div>
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1178px] items-center justify-center left-0 top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 250) 0%, rgb(248, 250, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <AmbientBackgroundPatternGradient />
      <MainContentContainer />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[22.167px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 22.1667 21" width="22.1667">
        <g id="Container">
          <path d={svgPaths.p15c2ea00} fill="#00342B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[24px] text-center tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[32px]">Ledgr</p>
      </div>
    </div>
  );
}

function BrandLogo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Brand Logo">
      <Container2 />
      <Heading2 />
    </div>
  );
}

function BrandLogoMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Brand Logo:margin">
      <BrandLogo />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
      <BrandLogoMargin />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Welcome Back</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Log in to your account</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] w-full">
        <p className="leading-[20px]">Email Address</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#707975] text-[14px] w-full">
          <p className="leading-[normal]">john.doe@example.com</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-[8px]" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[45px] pr-[17px] py-[14.5px] relative size-full">
          <Container4 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Input />
      <div className="absolute h-[13.333px] left-[17.67px] top-[17.33px] w-[16.667px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 16.6667 13.3333" width="16.6667">
          <path d={svgPaths.p1de55600} fill="#3F4945" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Email Input">
      <Label />
      <Container3 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Password</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Forgot Password?</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Link />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#707975] text-[14px] w-full">
          <p className="leading-[normal]">••••••••</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-[8px]" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[45px] pr-[17px] py-[14.5px] relative size-full">
          <Container7 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 18.3333 16.5" width="18.3333">
        <g id="Container">
          <path d={svgPaths.p22640680} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonTogglePasswordVisibility() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center pb-[6px] right-[16px] top-[11px]" data-name="Button - Toggle password visibility">
      <Container8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <div className="absolute h-[17.5px] left-[19.33px] top-[14.83px] w-[13.333px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="17.5" preserveAspectRatio="none" viewBox="0 0 13.3333 17.5" width="13.3333">
          <path d={svgPaths.p34e61e00} fill="#3F4945" id="Icon" />
        </svg>
      </div>
      <ButtonTogglePasswordVisibility />
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Password Input">
      <Container5 />
      <Container6 />
    </div>
  );
}

function SubmitButton() {
  return (
    <div className="bg-[#00342b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[48px] items-center justify-center pb-[14.5px] pt-[13.5px] relative rounded-[8px] shrink-0 w-full" data-name="Submit Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Login</p>
      </div>
    </div>
  );
}

function SubmitButtonMargin() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start pt-[8px] relative shrink-0 w-full" data-name="Submit Button:margin">
      <SubmitButton />
    </div>
  );
}

function LoginForm() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Login Form">
      <EmailInput />
      <PasswordInput />
      <SubmitButtonMargin />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[3.99px] items-start justify-center leading-[0] relative shrink-0 text-[12px] text-center w-full whitespace-nowrap" data-name="Footer Links">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#3f4945]">
        <p className="leading-[16px]">{`Don't have an account? `}</p>
      </div>
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#00342b]">
        <p className="leading-[16px]">Sign up</p>
      </div>
    </div>
  );
}

function FooterLinksMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Footer Links:margin">
      <FooterLinks />
    </div>
  );
}

function MainLoginCardContainer() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.04)] flex flex-col gap-[32px] items-start max-w-[420px] p-[32px] relative rounded-[12px] shrink-0 w-[420px]" data-name="Main - Login Card Container">
      <Header />
      <LoginForm />
      <FooterLinksMargin />
    </div>
  );
}

function HtmlBody1() {
  return (
    <div className="absolute content-stretch flex h-[1024px] items-center justify-center left-0 p-[48px] top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 250) 0%, rgb(248, 250, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <MainLoginCardContainer />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[23.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="22.5" preserveAspectRatio="none" viewBox="0 0 23.75 22.5" width="23.75">
        <g id="Container">
          <path d={svgPaths.pc0b5000} fill="#00342B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Ledgr</p>
      </div>
    </div>
  );
}

function SimpleBrandMarkForTransactionalFlow() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Simple brand mark for transactional flow">
      <Container9 />
      <Container10 />
    </div>
  );
}

function HeaderTopAppBarSuppressedAsPerRulesForTransactionalScreenButShowingSimpleHeaderForContext() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Header - Top App Bar (Suppressed as per rules for transactional screen, but showing simple header for context...">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pt-[32px] px-[48px] relative size-full">
          <SimpleBrandMarkForTransactionalFlow />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[32px] text-center tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[40px]">Verify Email</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] text-center whitespace-nowrap">
        <p className="mb-0">
          <span className="leading-[20px]">{`We've sent a 4-digit code to `}</span>
          <span className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[20px]">jane.doe@example.com</span>
          <span className="leading-[20px]">.</span>
        </p>
        <p className="leading-[20px]">Enter it below to verify your account.</p>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading3 />
        <Container11 />
      </div>
    </div>
  );
}

function Container14() {
  return <div className="flex-[1_0_0] h-[33px] min-w-px relative" data-name="Container" />;
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function InputDigit() {
  return (
    <div className="bg-[#f2f4f4] h-[80px] relative rounded-[8px] shrink-0 w-[64px]" data-name="Input - Digit 1">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[13px] py-[23.5px] relative rounded-[inherit] size-full">
        <Container13 />
      </div>
      <div aria-hidden className="absolute border border-[#00342b] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_2px_rgba(0,52,43,0.2)]" />
    </div>
  );
}

function Container16() {
  return <div className="flex-[1_0_0] h-[33px] min-w-px relative" data-name="Container" />;
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function InputDigit1() {
  return (
    <div className="bg-[#f2f4f4] h-[80px] relative rounded-[8px] shrink-0 w-[64px]" data-name="Input - Digit 2">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[13px] py-[23.5px] relative rounded-[inherit] size-full">
        <Container15 />
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container18() {
  return <div className="flex-[1_0_0] h-[33px] min-w-px relative" data-name="Container" />;
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function InputDigit2() {
  return (
    <div className="bg-[#f2f4f4] h-[80px] relative rounded-[8px] shrink-0 w-[64px]" data-name="Input - Digit 3">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[13px] py-[23.5px] relative rounded-[inherit] size-full">
        <Container17 />
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container20() {
  return <div className="flex-[1_0_0] h-[33px] min-w-px relative" data-name="Container" />;
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function InputDigit3() {
  return (
    <div className="bg-[#f2f4f4] h-[80px] relative rounded-[8px] shrink-0 w-[64px]" data-name="Input - Digit 4">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[13px] py-[23.5px] relative rounded-[inherit] size-full">
        <Container19 />
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <InputDigit />
      <InputDigit1 />
      <InputDigit2 />
      <InputDigit3 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#00342b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[48px] items-center justify-center pb-[14.5px] pt-[13.5px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Verify</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-start justify-center py-[0.5px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">(0:59)</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[16px] items-center justify-center opacity-50 pb-px relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00342b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">{`Resend Code `}</p>
      </div>
      <Container22 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">{`Didn't receive the code? `}</p>
      </div>
      <Button3 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[15.5px] items-start pt-[4px] relative shrink-0 w-full" data-name="Actions">
      <Button2 />
      <Container21 />
    </div>
  );
}

function FormOtpInputSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form - OTP Input Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container12 />
        <Actions />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333" width="9.33333">
        <g id="Container">
          <path d={svgPaths.p306f9a98} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Button">
      <Container24 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[11px] text-center tracking-[0.55px] whitespace-nowrap">
        <p className="leading-[16px]">Back to Sign In</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <Button4 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white max-w-[448px] relative rounded-[12px] shrink-0 w-[448px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] overflow-clip p-[33px] relative rounded-[inherit] size-full">
        <div className="absolute bg-[rgba(0,52,43,0.05)] blur-[32px] right-[-95px] rounded-[9999px] size-[256px] top-[-95px]" data-name="Subtle decorative background element" />
        <HeaderSection />
        <FormOtpInputSection />
        <Container23 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[271px] relative size-full">
          <BackgroundBorderShadow />
        </div>
      </div>
    </div>
  );
}

function HtmlBody2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 250) 0%, rgb(248, 250, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <HeaderTopAppBarSuppressedAsPerRulesForTransactionalScreenButShowingSimpleHeaderForContext />
      <Main />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[20px] w-full">
        <p className="leading-[28px]">Ledgr</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] w-full">
        <p className="leading-[16px]">Financial Clarity</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container26 />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container28 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p5df7b00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Accounts</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container30 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
        <g id="Container">
          <path d={svgPaths.p23f62780} fill="#217128" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#217128] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Transactions</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#a0f399] opacity-80 relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container32 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Reports</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container34 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container36 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#00342b] content-stretch flex flex-col items-center justify-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Link Account</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Help Center</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container39 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Logout</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#bfc9c4] border-solid border-t inset-0 pointer-events-none" />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <HorizontalBorder />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Button5 />
        <Margin1 />
      </div>
    </div>
  );
}

function SideNavBarDesktop() {
  return (
    <div className="bg-[#f2f4f4] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-full relative shrink-0 w-[256px]" data-name="SideNavBar (Desktop)">
      <div aria-hidden className="absolute border-[#bfc9c4] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[16px] pr-[17px] py-[16px] relative size-full">
        <Margin />
        <Container27 />
        <Container38 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] w-full">
          <p className="leading-[normal]">Search...</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f2f4f4] relative rounded-[9999px] shrink-0 w-[256px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[9px] pl-[41px] pr-[17px] pt-[8px] relative rounded-[inherit] size-full">
        <Container45 />
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bottom-[14.71%] content-stretch flex flex-col items-start left-[12px] top-[14.71%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
          <path d={svgPaths.p8a35e00} fill="#3F4945" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="Container">
      <Input2 />
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[272px] pb-[14px] pt-[8px] px-[8px] rounded-[9999px] top-1/2" data-name="Button">
      <Container47 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[328.01px] pb-[14px] pt-[8px] px-[8px] rounded-[9999px] top-1/2" data-name="Button">
      <Container48 />
    </div>
  );
}

function StitchPlaceholder300X300Svg() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="stitch-placeholder-300x300.svg">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g clipPath="url(#clip0_0_112)" id="stitch-placeholder-300x300.svg">
          <path d="M0 0H32V0V32V32H0V32V0V0V0" fill="#6056F0" fillOpacity="0.15" id="Vector" />
          <g id="Clip path group">
            <mask height="6" id="mask0_0_112" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="6" x="13" y="13">
              <path d={svgPaths.p2984500} fill="white" id="Vector_2" />
            </mask>
            <g mask="url(#mask0_0_112)">
              <path d={svgPaths.pef2c0e0} fill="#7168F6" id="Vector_3" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_112">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function UserProfileAvatar() {
  return (
    <div className="-translate-y-1/2 absolute left-[382.03px] rounded-[9999px] size-[36px] top-1/2" data-name="User profile avatar">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <StitchPlaceholder300X300Svg />
      </div>
      <div aria-hidden className="absolute border-2 border-[#f8fafa] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[46px] relative shrink-0 w-[416.03px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container44 />
        <Button6 />
        <Button7 />
        <UserProfileAvatar />
      </div>
    </div>
  );
}

function TopAppBarDesktopMobileHeader() {
  return (
    <div className="bg-[#f8fafa] h-[64px] relative shrink-0 w-full" data-name="TopAppBar (Desktop/Mobile Header)">
      <div aria-hidden className="absolute border-[#bfc9c4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-px pl-[559.97px] pr-[48px] relative size-full">
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[32px] tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[40px]">Transactions</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Review your recent financial activity.</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading5 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[9px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 13.5 9" width="13.5">
        <g id="Container">
          <path d={svgPaths.p1b72c490} fill="#191C1D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#e6e8e8] content-stretch flex gap-[8px] items-center px-[17px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container53 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Filter</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#00342b] content-stretch flex flex-col items-center justify-center pb-[9.5px] pt-[8.5px] px-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">All Accounts</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#f8fafa] content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Checking</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-auto relative shrink-0" data-name="Container">
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function HeaderFilters() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header & Filters">
      <Container50 />
      <Container52 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">TODAY</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.982px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 19.9815 20" width="19.9815">
        <g id="Container">
          <path d={svgPaths.pb5c2400} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e1e3e3] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Whole Foods Market</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Groceries • Checking ...4921</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background />
      <Container57 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">-$142.50</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container61 />
    </div>
  );
}

function TransactionItem() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Transaction Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Container55 />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 20 16" width="20">
        <g id="Container">
          <path d={svgPaths.p3a98f700} fill="#410003" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Netflix</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Entertainment • Credit ...8829</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background1 />
      <Container64 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">-$15.99</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container68 />
    </div>
  );
}

function TransactionItem1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Transaction Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Container62 />
          <Container67 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <TransactionItem />
      <TransactionItem1 />
    </div>
  );
}

function DateGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Date Group">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading6 />
        <Container54 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">YESTERDAY</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
        <g id="Container">
          <path d={svgPaths.p26835240} fill="#217128" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#a0f399] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container71 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Acme Corp</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Salary • Checking ...4921</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background2 />
      <Container72 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b6d24] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">+$4,250.00</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container76 />
    </div>
  );
}

function TransactionItemIncome() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Transaction Item (Income)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Container70 />
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 16.5 18" width="16.5">
        <g id="Container">
          <path d={svgPaths.p1f132dc0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e1e3e3] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Shell Station</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">{`Auto & Transport • Credit ...8829`}</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background3 />
      <Container79 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">-$45.20</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container83 />
    </div>
  );
}

function TransactionItem2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Transaction Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Container77 />
          <Container82 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <TransactionItemIncome />
      <TransactionItem2 />
    </div>
  );
}

function DateGroup1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Date Group">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading7 />
        <Container69 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#f8fafa] content-stretch flex items-center justify-center px-[25px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Load More</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Button11 />
      </div>
    </div>
  );
}

function TransactionsListContainer() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.04)] relative rounded-[12px] shrink-0 w-full" data-name="Transactions List Container">
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
        <DateGroup />
        <DateGroup1 />
        <Container84 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[1024px] relative shrink-0 w-full" data-name="Container">
      <HeaderFilters />
      <TransactionsListContainer />
    </div>
  );
}

function ScrollableContent() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Scrollable Content">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[48px] relative size-full">
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-name="Main Content Area">
      <TopAppBarDesktopMobileHeader />
      <ScrollableContent />
    </div>
  );
}

function HtmlBody3() {
  return (
    <div className="absolute content-stretch flex h-[1024px] items-start left-0 top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 250) 0%, rgb(248, 250, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <SideNavBarDesktop />
      <MainContentArea />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#00342b] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">L</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Ledgr</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Financial Clarity</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading8 />
      <Container88 />
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[16px] relative size-full">
          <Background4 />
          <Container87 />
        </div>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container86 />
    </div>
  );
}

function Container90() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container90 />
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p5df7b00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Accounts</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container92 />
          <Container93 />
        </div>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
        <g id="Container">
          <path d={svgPaths.p396ca1c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Transactions</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container94 />
          <Container95 />
        </div>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Reports</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container96 />
          <Container97 />
        </div>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.pf427b00} fill="#217128" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#217128] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Budget & Goals`}</p>
      </div>
    </div>
  );
}

function LinkWeMapBudgetGoalsToReportsOrDashboardButLetsHighlightReportsForNowAsItsAnAnalyt() {
  return (
    <div className="bg-[#a0f399] opacity-80 relative rounded-[8px] shrink-0 w-full" data-name="Link - We map Budget & Goals to Reports or Dashboard, but let's highlight Reports for now as it's an analyt...">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container98 />
          <Container99 />
        </div>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container100 />
          <Container101 />
        </div>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px relative w-full" data-name="Container">
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
      <LinkWeMapBudgetGoalsToReportsOrDashboardButLetsHighlightReportsForNowAsItsAnAnalyt />
      <Link12 />
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#00342b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Link Account</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Help Center</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container104 />
          <Container105 />
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Logout</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container106 />
          <Container107 />
        </div>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Link13 />
      <Link14 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Button12 />
      <Container103 />
    </div>
  );
}

function Container85() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <Margin2 />
        <Container89 />
        <Container102 />
      </div>
    </div>
  );
}

function SideNavBar() {
  return (
    <div className="bg-[#f2f4f4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col h-[544px] items-start justify-center pr-px relative shrink-0 w-[256px] z-[2]" data-name="SideNavBar">
      <div aria-hidden className="absolute border-[#bfc9c4] border-r border-solid inset-0 pointer-events-none" />
      <Container85 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[24px] tracking-[-0.24px] whitespace-nowrap">
          <p className="leading-[32px]">{`Budget & Goals`}</p>
        </div>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container109 />
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container110 />
    </div>
  );
}

function UserProfileAvatar1() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[32px]" data-name="User profile avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfileAvatar} />
      </div>
      <div aria-hidden className="absolute border-2 border-[#eceeee] border-solid inset-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Button13 />
        <Button14 />
        <UserProfileAvatar1 />
      </div>
    </div>
  );
}

function TopAppBarMobileDesktopHeaderArea() {
  return (
    <div className="bg-[#f8fafa] h-[64px] relative shrink-0 w-full z-[2]" data-name="TopAppBar (Mobile & Desktop Header Area)">
      <div aria-hidden className="absolute border-[#bfc9c4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[48px] relative size-full">
          <Heading9 />
          <Container108 />
        </div>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] w-full">
        <p className="leading-[20px]">Total Monthly Budget</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[32px] tracking-[-0.64px] w-full">
        <p className="leading-[40px]">$4,500.00</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container113 />
        <Heading10 />
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">$2,150.00 Spent</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">$2,350.00 Remaining</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container116 />
        <Container117 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#eceeee] h-[12px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#00342b] inset-[0_53%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">47% of total budget used</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container115 />
      <Background5 />
      <Container118 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Container114 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white col-[1/span_8] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Container112 />
        <Margin3 />
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#afefdd] text-[14px] w-full">
        <p className="leading-[20px]">Safe to Spend</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[32px] text-white tracking-[-0.64px] w-full">
        <p className="leading-[40px]">$850.00</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94d3c1] text-[12px] w-full">
        <p className="leading-[16px]">For the next 7 days</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container120 />
      <Heading11 />
      <Container121 />
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Adjust Budget</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Button:margin">
      <Button15 />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-[#00342b] col-[9/span_4] justify-self-stretch relative rounded-[12px] row-1 self-start shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Background+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <Container119 />
          <ButtonMargin />
          <div className="absolute bg-[rgba(255,255,255,0.1)] blur-[12px] right-[-24px] rounded-[9999px] size-[128px] top-[-24px]" data-name="Overlay+Blur" />
        </div>
      </div>
    </div>
  );
}

function SummarySection() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_206px] relative shrink-0 w-full" data-name="Summary Section">
      <BackgroundBorderShadow1 />
      <BackgroundShadow1 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">Categories</p>
        </div>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="#00342B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container122 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Add</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(191,201,196,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <Heading12 />
      <Button16 />
    </div>
  );
}

function Container126() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 16 18" width="16">
        <g id="Container">
          <path d={svgPaths.p12a32500} fill="#1B6D24" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#a0f399] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container126 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Housing</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">$1,500 / $1,500</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading13 />
      <Container128 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background6 />
      <Container127 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#eceeee] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[11px] tracking-[0.55px] whitespace-nowrap">
        <p className="leading-[16px]">100%</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container125 />
        <Background7 />
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#eceeee] h-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#1b6d24] flex-[1_0_0] min-h-px relative rounded-[9999px] w-full" data-name="Background" />
      </div>
    </div>
  );
}

function Housing() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Housing">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <Container124 />
        <Background8 />
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="h-[20px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 15 20" width="15">
        <g id="Container">
          <path d={svgPaths.p23cfd7c0} fill="#CA8A04" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(253,224,71,0.3)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container131 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Food & Dining`}</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">$450 / $600</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading14 />
      <Container133 />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Overlay />
      <Container132 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#eceeee] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[11px] tracking-[0.55px] whitespace-nowrap">
        <p className="leading-[16px]">75%</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container130 />
        <Background9 />
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#eceeee] h-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#eab308] bottom-0 left-0 right-1/4 rounded-[9999px] top-0" data-name="Background" />
      </div>
    </div>
  );
}

function Food() {
  return (
    <div className="bg-white col-2 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Food">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <Container129 />
        <Background10 />
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="h-[16px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 18 16" width="18">
        <g id="Container">
          <path d={svgPaths.p2d32e900} fill="#2563EB" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container136 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Transportation</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">$120 / $300</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading15 />
      <Container138 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background11 />
      <Container137 />
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#eceeee] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[11px] tracking-[0.55px] whitespace-nowrap">
        <p className="leading-[16px]">40%</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container135 />
        <Background12 />
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#eceeee] h-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#3b82f6] inset-[0_60%_0_0] rounded-[9999px]" data-name="Background" />
      </div>
    </div>
  );
}

function Transportation() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Transportation">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[41px] pt-[17px] px-[17px] relative size-full">
        <Container134 />
        <Background13 />
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 20 16" width="20">
        <g id="Container">
          <path d={svgPaths.p3a98f700} fill="#BA1A1A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container141 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Entertainment</p>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">$250 / $200</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading16 />
      <Container143 />
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background14 />
      <Container142 />
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[11px] tracking-[0.55px] whitespace-nowrap">
        <p className="leading-[16px]">125%</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[8px] relative size-full">
        <Container140 />
        <Background15 />
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#eceeee] h-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ba1a1a] flex-[1_0_0] min-h-px relative rounded-[9999px] w-full" data-name="Background" />
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[12px] w-full">
          <p className="leading-[16px]">Over budget by $50</p>
        </div>
      </div>
    </div>
  );
}

function Entertainment() {
  return (
    <div className="bg-white col-2 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Entertainment">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container139 />
        <Background16 />
        <Container144 />
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__98px_122px] relative shrink-0 w-full" data-name="Container">
      <Housing />
      <Food />
      <Transportation />
      <Entertainment />
    </div>
  );
}

function SectionCategories() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Categories">
      <HorizontalBorder1 />
      <Container123 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">Savings Goals</p>
        </div>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="#00342B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container145 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Create</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(191,201,196,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <Heading17 />
      <Button17 />
    </div>
  );
}

function Background17() {
  return (
    <div className="h-[42.5px] relative shrink-0 w-[37px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" height="42.5" preserveAspectRatio="none" viewBox="0 0 37 42.5" width="37">
        <g id="Background">
          <rect fill="#ECEEEE" height="42.5" rx="8" width="37" />
          <path d={svgPaths.pf26c1a0} fill="#00342B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#a0f399] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#217128] text-[11px] tracking-[0.55px] whitespace-nowrap">
        <p className="leading-[16px]">On Track</p>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Background17 />
      <Background18 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] w-full">
        <p className="leading-[28px]">New House Downpayment</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] w-full">
        <p className="leading-[16px]">Target: $60,000 by Dec 2025</p>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">$15,400</p>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">25%</p>
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pb-[4px] pr-[0.01px] pt-[12px] relative size-full">
          <Container151 />
          <Container152 />
        </div>
      </div>
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-[#eceeee] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#00342b] bottom-0 left-0 right-3/4 rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function Container147() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container148 />
        <Heading18 />
        <Container149 />
        <Container150 />
        <Background19 />
      </div>
    </div>
  );
}

function GoalNewHouse() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[298.66px]" data-name="Goal: New House">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[17px] relative rounded-[inherit] size-full">
        <div className="absolute inset-[1px_1px_0.5px_1px] opacity-10" data-name="Background Image">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-14.95%] max-w-none top-0 w-[129.91%]" src={imgBackgroundImage} />
          </div>
        </div>
        <Container147 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Background20() {
  return (
    <div className="h-[42px] relative shrink-0 w-[32px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" height="42" preserveAspectRatio="none" viewBox="0 0 32 42" width="32">
        <g id="Background">
          <rect fill="#ECEEEE" height="42" rx="8" width="32" />
          <path d={svgPaths.p2bbf9580} fill="#00342B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Background20 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] w-full">
        <p className="leading-[28px]">Emergency Fund</p>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] w-full">
        <p className="leading-[16px]">Target: $10,000</p>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">$8,500</p>
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">85%</p>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex items-end justify-between pb-[4px] pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Container157 />
      <Container158 />
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-[#eceeee] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#00342b] inset-[0_15%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container153() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container154 />
        <Heading19 />
        <Container155 />
        <Container156 />
        <Background21 />
      </div>
    </div>
  );
}

function GoalEmergencyFund() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[298.67px]" data-name="Goal: Emergency Fund">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[17px] relative rounded-[inherit] size-full">
        <Container153 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Background22() {
  return (
    <div className="h-[40.15px] relative shrink-0 w-[36.679px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" height="40.15" preserveAspectRatio="none" viewBox="0 0 36.6794 40.15" width="36.6794">
        <g id="Background">
          <rect fill="#ECEEEE" height="40.15" rx="8" width="36.6794" />
          <path d={svgPaths.p128e5a80} fill="#00342B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background23() {
  return (
    <div className="bg-[#eceeee] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[11px] tracking-[0.55px] whitespace-nowrap">
        <p className="leading-[16px]">Behind</p>
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Background22 />
        <Background23 />
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] w-full">
        <p className="leading-[28px]">Japan Trip 2024</p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] w-full">
        <p className="leading-[16px]">Target: $5,000 by Sep 2024</p>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">$1,200</p>
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">24%</p>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pb-[4px] pr-[0.01px] pt-[12px] relative size-full">
          <Container163 />
          <Container164 />
        </div>
      </div>
    </div>
  );
}

function Background24() {
  return (
    <div className="bg-[#eceeee] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#707975] inset-[0_76%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container159() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container160 />
        <Heading20 />
        <Container161 />
        <Container162 />
        <Background24 />
      </div>
    </div>
  );
}

function GoalVacation() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[298.66px]" data-name="Goal: Vacation">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[17px] relative rounded-[inherit] size-full">
        <div className="absolute inset-[1px_1px_1.15px_1px] opacity-10" data-name="Image">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-14.95%] max-w-none top-0 w-[129.91%]" src={imgImage} />
          </div>
        </div>
        <Container159 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <GoalNewHouse />
      <GoalEmergencyFund />
      <GoalVacation />
    </div>
  );
}

function SectionGoals() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Goals">
      <HorizontalBorder2 />
      <Container146 />
    </div>
  );
}

function Container111() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] p-[48px] relative size-full">
        <SummarySection />
        <SectionCategories />
        <SectionGoals />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-[#f8fafa] content-stretch flex flex-[1_0_0] flex-col isolate items-start min-w-px overflow-auto relative self-stretch z-[1]" data-name="Main Content">
      <TopAppBarMobileDesktopHeaderArea />
      <Container111 />
    </div>
  );
}

function HtmlBody4() {
  return (
    <div className="absolute content-stretch flex isolate items-start left-0 top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 250) 0%, rgb(248, 250, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <SideNavBar />
      <MainContent />
    </div>
  );
}

function LedgrBusinessLogo() {
  return (
    <div className="max-w-[255px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Ledgr Business Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLedgrBusinessLogo} />
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Ledgr</p>
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Financial Clarity</p>
      </div>
    </div>
  );
}

function Container165() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading21 />
      <Container166 />
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <LedgrBusinessLogo />
          <Container165 />
        </div>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p191dcc80} fill="#217128" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#217128] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="bg-[#a0f399] opacity-80 relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">
          <Container167 />
          <Container168 />
        </div>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p5df7b00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Accounts</p>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">
          <Container169 />
          <Container170 />
        </div>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
        <g id="Container">
          <path d={svgPaths.p396ca1c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Transactions</p>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">
          <Container171 />
          <Container172 />
        </div>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Reports</p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">
          <Container173 />
          <Container174 />
        </div>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container176() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">
          <Container175 />
          <Container176 />
        </div>
      </div>
    </div>
  );
}

function NavigationTabs() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Navigation Tabs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <Link15 />
        <Link16 />
        <Link17 />
        <Link18 />
        <Link19 />
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="h-[13px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 20 13" width="20">
        <g id="Container">
          <path d={svgPaths.p3bcf300} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Link Account</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#00342b] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center relative size-full">
        <Container177 />
        <Container178 />
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Help Center</p>
      </div>
    </div>
  );
}

function Link20() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">
          <Container179 />
          <Container180 />
        </div>
      </div>
    </div>
  );
}

function Container181() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container182() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Logout</p>
      </div>
    </div>
  );
}

function Link21() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">
          <Container181 />
          <Container182 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden className="absolute border-[#bfc9c4] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[17px] px-[16px] relative size-full">
        <Button18 />
        <Link20 />
        <Link21 />
      </div>
    </div>
  );
}

function SideNavBarDesktop1() {
  return (
    <div className="bg-[#f2f4f4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col h-full items-start pr-px relative shrink-0 w-[256px]" data-name="SideNavBar (Desktop)">
      <div aria-hidden className="absolute border-[#bfc9c4] border-r border-solid inset-0 pointer-events-none" />
      <Header1 />
      <NavigationTabs />
      <Footer />
    </div>
  );
}

function Container183() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[normal]">Search...</p>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[10px] pl-[41px] pr-[17px] pt-[9px] relative size-full">
          <Container183 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SearchRightAligned() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[448px] relative shrink-0 w-full" data-name="Search (Right Aligned)">
      <Input3 />
      <div className="absolute left-[15px] size-[18px] top-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
          <path d={svgPaths.p8a35e00} fill="#3F4945" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SearchRightAlignedMargin() {
  return (
    <div className="flex-[1_0_0] max-w-[480px] min-w-px relative" data-name="Search (Right Aligned):margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[16px] relative size-full">
        <SearchRightAligned />
      </div>
    </div>
  );
}

function Container184() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container184 />
      <div className="absolute bg-[#ba1a1a] right-[7.99px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background" />
    </div>
  );
}

function Container185() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container185 />
    </div>
  );
}

function UserProfileAvatar2() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[32px]" data-name="User profile avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfileAvatar1} />
      </div>
      <div aria-hidden className="absolute border-2 border-[#eceeee] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function ImgUserProfileAvatarMargin() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pl-[8px] relative shrink-0 w-[40px]" data-name="Img - User profile avatar:margin">
      <UserProfileAvatar2 />
    </div>
  );
}

function TrailingActions() {
  return (
    <div className="relative shrink-0" data-name="Trailing Actions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button19 />
        <Button20 />
        <ImgUserProfileAvatarMargin />
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="bg-[#f8fafa] h-[64px] relative shrink-0 w-full z-[2]" data-name="Header - TopAppBar">
      <div aria-hidden className="absolute border-[#bfc9c4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px pl-[203.98px] pr-[48px] relative size-full">
          <SearchRightAlignedMargin />
          <TrailingActions />
        </div>
      </div>
    </div>
  );
}

function Heading22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[32px] tracking-[-0.64px] w-full">
        <p className="leading-[40px]">Good Morning, Francis.</p>
      </div>
    </div>
  );
}

function Container186() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] w-full">
        <p className="leading-[20px]">{`Here's a summary of your finances today.`}</p>
      </div>
    </div>
  );
}

function Greeting() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Greeting">
      <Heading22 />
      <Container186 />
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Total Balance</p>
      </div>
    </div>
  );
}

function Container190() {
  return (
    <div className="h-[18px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 19 18" width="19">
        <g id="Container">
          <path d={svgPaths.p53fc80} fill="#707975" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container188() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container189 />
          <Container190 />
        </div>
      </div>
    </div>
  );
}

function Heading23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[32px] tracking-[-0.64px] w-full">
        <p className="leading-[40px]">$12,450.00</p>
      </div>
    </div>
  );
}

function Container187() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container188 />
        <Heading23 />
      </div>
    </div>
  );
}

function Container192() {
  return (
    <div className="h-[8px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 13.3333 8" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p19734dc0} fill="#1B6D24" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container193() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b6d24] text-[11px] tracking-[0.55px] whitespace-nowrap">
        <p className="leading-[16px]">+2.4% from last month</p>
      </div>
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container192 />
      <Container193 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container191 />
      </div>
    </div>
  );
}

function TotalBalanceCard() {
  return (
    <div className="bg-white col-[1/span_4] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Total Balance Card">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[17px] relative size-full">
        <Container187 />
        <Margin4 />
      </div>
    </div>
  );
}

function Container196() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Income</p>
      </div>
    </div>
  );
}

function Container197() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Container">
          <path d={svgPaths.p2274a600} fill="#707975" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container195() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container196 />
          <Container197 />
        </div>
      </div>
    </div>
  );
}

function Heading24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[24px] tracking-[-0.24px] w-full">
        <p className="leading-[32px]">$4,200.00</p>
      </div>
    </div>
  );
}

function Container194() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container195 />
        <Heading24 />
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p363cf400} fill="#1B6D24" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container200() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">On track</p>
      </div>
    </div>
  );
}

function Container198() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container199 />
      <Container200 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container198 />
      </div>
    </div>
  );
}

function IncomeCard() {
  return (
    <div className="bg-white col-[5/span_4] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Income Card">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[17px] relative size-full">
        <Container194 />
        <Margin5 />
      </div>
    </div>
  );
}

function Container203() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Expenses</p>
      </div>
    </div>
  );
}

function Container204() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Container">
          <path d={svgPaths.p20fa5d00} fill="#707975" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container202() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container203 />
      <Container204 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[24px] tracking-[-0.24px] w-full">
        <p className="leading-[32px]">$1,850.00</p>
      </div>
    </div>
  );
}

function Container201() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container202 />
        <Heading25 />
      </div>
    </div>
  );
}

function Container206() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.6667" preserveAspectRatio="none" viewBox="0 0 14.6667 12.6667" width="14.6667">
        <g id="Container">
          <path d={svgPaths.pc531a80} fill="#BA1A1A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container207() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Slightly higher</p>
      </div>
    </div>
  );
}

function Container205() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container206 />
      <Container207 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container205 />
      </div>
    </div>
  );
}

function ExpensesCard() {
  return (
    <div className="bg-white col-[9/span_4] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Expenses Card">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[17px] relative size-full">
        <Container201 />
        <Margin6 />
      </div>
    </div>
  );
}

function Heading26() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">Transactions</p>
        </div>
      </div>
    </div>
  );
}

function Link22() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">View All</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(191,201,196,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <Heading26 />
      <Link22 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <HorizontalBorder3 />
      </div>
    </div>
  );
}

function Container210() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20.094px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 20.0939 18" width="20.0939">
        <g id="Container">
          <path d={svgPaths.p209d4440} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background25() {
  return (
    <div className="bg-[#e6e8e8] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container210 />
    </div>
  );
}

function Container212() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Whole Foods</p>
      </div>
    </div>
  );
}

function Container213() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Groceries • Today</p>
      </div>
    </div>
  );
}

function Container211() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container212 />
      <Container213 />
    </div>
  );
}

function Container209() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background25 />
      <Container211 />
    </div>
  );
}

function Container214() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">-$124.50</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pl-[8px] pr-[8.01px] py-[8px] right-[8px] rounded-[8px] top-0" data-name="Item 1">
      <Container209 />
      <Container214 />
    </div>
  );
}

function Container216() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
        <g id="Container">
          <path d={svgPaths.p26835240} fill="#217128" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background26() {
  return (
    <div className="bg-[#a0f399] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container216 />
    </div>
  );
}

function Container218() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Acme Corp</p>
      </div>
    </div>
  );
}

function Container219() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Salary • Yesterday</p>
      </div>
    </div>
  );
}

function Container217() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container218 />
      <Container219 />
    </div>
  );
}

function Container215() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background26 />
      <Container217 />
    </div>
  );
}

function Container220() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b6d24] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">+$2,100.00</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 p-[8px] right-[8px] rounded-[8px] top-[64px]" data-name="Item 2">
      <Container215 />
      <Container220 />
    </div>
  );
}

function Container222() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p12df5c00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background27() {
  return (
    <div className="bg-[#e6e8e8] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container222 />
    </div>
  );
}

function Container224() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Electric Co</p>
      </div>
    </div>
  );
}

function Container225() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Utilities • Aug 14</p>
      </div>
    </div>
  );
}

function Container223() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container224 />
      <Container225 />
    </div>
  );
}

function Container221() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background27 />
      <Container223 />
    </div>
  );
}

function Container226() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">-$85.20</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 p-[8px] right-[8px] rounded-[8px] top-[128px]" data-name="Item 3">
      <Container221 />
      <Container226 />
    </div>
  );
}

function Container228() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p2fcd0500} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background28() {
  return (
    <div className="bg-[#e6e8e8] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container228 />
    </div>
  );
}

function Container230() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Starbucks</p>
      </div>
    </div>
  );
}

function Container231() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Dining • Aug 12</p>
      </div>
    </div>
  );
}

function Container229() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container230 />
      <Container231 />
    </div>
  );
}

function Container227() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background28 />
      <Container229 />
    </div>
  );
}

function Container232() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">-$5.40</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pl-[8px] pr-[8.01px] py-[8px] right-[8px] rounded-[8px] top-[192px]" data-name="Item 4">
      <Container227 />
      <Container232 />
    </div>
  );
}

function Container208() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-auto relative rounded-[inherit] size-full">
        <Item />
        <Item1 />
        <Item2 />
        <Item3 />
      </div>
    </div>
  );
}

function RecentTransactionsList() {
  return (
    <div className="bg-white col-[9/span_4] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[300px] justify-self-stretch relative rounded-[12px] row-2 shrink-0" data-name="Recent Transactions List">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Margin7 />
        <Container208 />
      </div>
    </div>
  );
}

function Heading27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">My Portfolio</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#a0f399] content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#217128] text-[11px] text-center tracking-[0.55px] whitespace-nowrap">
        <p className="leading-[16px]">1W</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[11px] text-center tracking-[0.55px] whitespace-nowrap">
        <p className="leading-[16px]">1M</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[11px] text-center tracking-[0.55px] whitespace-nowrap">
        <p className="leading-[16px]">1Y</p>
      </div>
    </div>
  );
}

function Container234() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button21 />
      <Button22 />
      <Button23 />
    </div>
  );
}

function Container233() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading27 />
      <Container234 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container233 />
      </div>
    </div>
  );
}

function PortfolioChart() {
  return (
    <div className="absolute inset-[0_0.01px_0_0] mix-blend-multiply opacity-80" data-name="Portfolio Chart">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[47.22%] max-w-none top-0 w-[5.56%]" src={imgPortfolioChart} />
      </div>
    </div>
  );
}

function ChartPlaceholderImageFromMockupReference() {
  return (
    <div className="h-[222px] min-h-[200px] relative shrink-0 w-full z-[1]" data-name="Chart Placeholder (Image from Mockup Reference)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PortfolioChart />
        <div className="absolute bg-gradient-to-t from-white inset-[0_0.01px_0_0] to-[rgba(255,255,255,0)] via-1/2 via-[rgba(255,255,255,0)]" data-name="Gradient" />
      </div>
    </div>
  );
}

function MyPortfolioChartArea() {
  return (
    <div className="bg-white col-[1/span_8] justify-self-stretch min-h-[300px] relative rounded-[12px] row-2 self-start shrink-0" data-name="My Portfolio Chart Area">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col isolate items-start min-h-[inherit] p-[17px] relative size-full">
          <Margin8 />
          <ChartPlaceholderImageFromMockupReference />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function DashboardGridBentoStyle() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[__146px_300px] relative shrink-0 w-full" data-name="Dashboard Grid (Bento Style)">
      <TotalBalanceCard />
      <IncomeCard />
      <ExpensesCard />
      <RecentTransactionsList />
      <MyPortfolioChartArea />
    </div>
  );
}

function MainScrollableContent() {
  return (
    <div className="bg-[#f8fafa] flex-[1_0_0] min-h-px relative w-full z-[1]" data-name="Main - Scrollable Content">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[48px] relative size-full">
          <Greeting />
          <DashboardGridBentoStyle />
        </div>
      </div>
    </div>
  );
}

function MainContentArea1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full isolate items-start min-w-px overflow-clip relative" data-name="Main Content Area">
      <HeaderTopAppBar />
      <MainScrollableContent />
    </div>
  );
}

function LedgrDashboard() {
  return (
    <div className="absolute content-stretch flex h-[1024px] items-start left-0 top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 250) 0%, rgb(248, 250, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Ledgr - Dashboard">
      <SideNavBarDesktop1 />
      <MainContentArea1 />
    </div>
  );
}

function Container236() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 12.8333 9.33333" width="12.8333">
        <g id="Container">
          <path d={svgPaths.p35624880} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background29() {
  return (
    <div className="bg-[#00342b] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container236 />
    </div>
  );
}

function Container237() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Ledgr</p>
      </div>
    </div>
  );
}

function Container235() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center p-[24px] relative size-full">
          <Background29 />
          <Container237 />
        </div>
      </div>
    </div>
  );
}

function Container239() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container240() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link23() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container239 />
          <Container240 />
        </div>
      </div>
    </div>
  );
}

function Container241() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p29720700} fill="#217128" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container242() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#217128] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Accounts</p>
      </div>
    </div>
  );
}

function Link24() {
  return (
    <div className="bg-[#a0f399] opacity-80 relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container241 />
          <Container242 />
        </div>
      </div>
    </div>
  );
}

function Container243() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
        <g id="Container">
          <path d={svgPaths.p396ca1c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container244() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Transactions</p>
      </div>
    </div>
  );
}

function Link25() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container243 />
          <Container244 />
        </div>
      </div>
    </div>
  );
}

function Container245() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container246() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Reports</p>
      </div>
    </div>
  );
}

function Link26() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container245 />
          <Container246 />
        </div>
      </div>
    </div>
  );
}

function Container247() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container248() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Link27() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container247 />
          <Container248 />
        </div>
      </div>
    </div>
  );
}

function Container238() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <Link23 />
        <Link24 />
        <Link25 />
        <Link26 />
        <Link27 />
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="h-[840px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pt-[16px] relative size-full">
        <Container238 />
      </div>
    </div>
  );
}

function Container250() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-[#00342b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] h-[48px] items-center justify-center relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <Container250 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Link Account</p>
      </div>
    </div>
  );
}

function Container249() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Button24 />
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="h-[104px] min-h-[80px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end min-h-[inherit] pb-[24px] relative size-full">
        <Container249 />
      </div>
    </div>
  );
}

function Container251() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container252() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Help Center</p>
      </div>
    </div>
  );
}

function Link28() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container251 />
          <Container252 />
        </div>
      </div>
    </div>
  );
}

function Container253() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container254() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Logout</p>
      </div>
    </div>
  );
}

function Link29() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container253 />
          <Container254 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#bfc9c4] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[17px] px-[16px] relative size-full">
        <Link28 />
        <Link29 />
      </div>
    </div>
  );
}

function DesktopSideNavigation() {
  return (
    <div className="bg-[#f2f4f4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col h-full items-start pr-px relative shrink-0 w-[256px] z-[2]" data-name="Desktop Side Navigation">
      <div aria-hidden className="absolute border-[#bfc9c4] border-r border-solid inset-0 pointer-events-none" />
      <Container235 />
      <Margin9 />
      <Margin10 />
      <HorizontalBorder4 />
    </div>
  );
}

function Heading28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[24px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[32px]">Investments</p>
      </div>
    </div>
  );
}

function Container258() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] w-full">
          <p className="leading-[normal]">Search...</p>
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-[#f2f4f4] relative rounded-[9999px] shrink-0 w-[256px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[9px] pl-[41px] pr-[17px] pt-[8px] relative rounded-[inherit] size-full">
        <Container258 />
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container257() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Input4 />
      <div className="absolute left-[13.75px] size-[10.5px] top-[14.75px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
          <path d={svgPaths.p210dd580} fill="#3F4945" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container259() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container259 />
    </div>
  );
}

function Container260() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container260 />
    </div>
  );
}

function UserProfileAvatar3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="User profile avatar">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfileAvatar2} />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#e6e8e8] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <UserProfileAvatar3 />
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pl-[8px] relative shrink-0 w-[40px]" data-name="Margin">
      <BackgroundBorder />
    </div>
  );
}

function Container256() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container257 />
      <Button25 />
      <Button26 />
      <Margin11 />
    </div>
  );
}

function Container255() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[48px] relative size-full">
          <Heading28 />
          <Container256 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBarMobileDesktop() {
  return (
    <div className="bg-[#f8fafa] content-stretch flex flex-col items-start pb-px relative shrink-0 w-full z-[2]" data-name="Header - Top App Bar (Mobile & Desktop)">
      <div aria-hidden className="absolute border-[#bfc9c4] border-b border-solid inset-0 pointer-events-none" />
      <Container255 />
    </div>
  );
}

function Container264() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[11px] tracking-[0.55px] uppercase w-full">
        <p className="leading-[16px]">TOTAL PORTFOLIO VALUE</p>
      </div>
    </div>
  );
}

function Heading29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[32px] tracking-[-0.64px] w-full">
        <p className="leading-[40px]">$42,850.00</p>
      </div>
    </div>
  );
}

function Container266() {
  return (
    <div className="h-[7px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="7" preserveAspectRatio="none" viewBox="0 0 11.6667 7" width="11.6667">
        <g id="Container">
          <path d={svgPaths.pde19380} fill="#1B6D24" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container267() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b6d24] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">+$1,250.00 (3.2%) Today</p>
      </div>
    </div>
  );
}

function Container265() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container266 />
      <Container267 />
    </div>
  );
}

function Container263() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container264 />
      <Heading29 />
      <Container265 />
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-[#00342b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[48px] items-center justify-center pb-[14.5px] pt-[13.5px] px-[24px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Trade / Transfer</p>
      </div>
    </div>
  );
}

function Container268() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Button27 />
    </div>
  );
}

function Container262() {
  return (
    <div className="relative self-stretch shrink-0 w-[426px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between relative size-full">
        <Container263 />
        <Container268 />
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="SVG">
      <div className="absolute inset-[0_-1.01%_-2.93%_-1.01%]">
        <svg className="block size-full" fill="none" height="120.218" preserveAspectRatio="none" viewBox="0 0 345.636 120.218" width="345.636">
          <g id="SVG">
            <path d={svgPaths.p37514120} id="Vector" stroke="#1B6D24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.834" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="h-[118.8px] relative shrink-0 w-[340.8px]" data-name="Border">
      <div aria-hidden className="absolute border-[rgba(191,201,196,0.8)] border-b-2 border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pb-[2px] pl-[2px] relative size-full">
        <Svg />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white min-h-[200px] relative rounded-[8px] self-stretch shrink-0 w-[428px]" data-name="Background+Border">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-h-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="absolute inset-px opacity-20" style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 19.697%, rgb(225, 227, 227) 19.697%, rgb(225, 227, 227) 20.202%), linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 9.1549%, rgb(225, 227, 227) 9.1549%, rgb(225, 227, 227) 9.3897%)" }} data-name="Placeholder for chart" />
        <Border />
      </div>
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SectionPortfolioHeaderChart() {
  return (
    <div className="bg-[#f8fafa] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.04)] relative rounded-[12px] shrink-0 w-full" data-name="Section - Portfolio Header & Chart">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-start justify-center p-[25px] relative size-full">
          <Container262 />
          <BackgroundBorder1 />
        </div>
      </div>
    </div>
  );
}

function Heading30() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">Watchlist</p>
        </div>
      </div>
    </div>
  );
}

function Container269() {
  return (
    <div className="relative shrink-0 size-[8.167px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="8.16667" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667" width="8.16667">
        <g id="Container">
          <path d={svgPaths.p10ad69c0} fill="#00342B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[7px] pt-[5px] px-[4px] relative size-full">
        <Container269 />
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#bfc9c4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[9px] relative size-full">
          <Heading30 />
          <Button28 />
        </div>
      </div>
    </div>
  );
}

function Margin12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <HorizontalBorder5 />
      </div>
    </div>
  );
}

function Background30() {
  return (
    <div className="bg-[#e1e3e3] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">AAPL</p>
      </div>
    </div>
  );
}

function Container273() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Apple Inc.</p>
      </div>
    </div>
  );
}

function Container274() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Tech</p>
      </div>
    </div>
  );
}

function Container272() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container273 />
      <Container274 />
    </div>
  );
}

function Container271() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Background30 />
        <Container272 />
      </div>
    </div>
  );
}

function Container276() {
  return (
    <div className="content-stretch flex flex-col items-end mb-[-0.5px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">$185.92</p>
      </div>
    </div>
  );
}

function Container278() {
  return (
    <div className="relative shrink-0 size-[6.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="6.66667" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667" width="6.66667">
        <g id="Container">
          <path d={svgPaths.p3956ef00} fill="#1B6D24" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container277() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Container278 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b6d24] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">1.2%</p>
      </div>
    </div>
  );
}

function Container275() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container276 />
        <Container277 />
      </div>
    </div>
  );
}

function WatchlistItems() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Watchlist Items">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[9px] relative size-full">
          <Container271 />
          <Container275 />
        </div>
      </div>
    </div>
  );
}

function Background31() {
  return (
    <div className="bg-[#e1e3e3] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">MSFT</p>
      </div>
    </div>
  );
}

function Container281() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Microsoft</p>
      </div>
    </div>
  );
}

function Container282() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Tech</p>
      </div>
    </div>
  );
}

function Container280() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container281 />
      <Container282 />
    </div>
  );
}

function Container279() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Background31 />
        <Container280 />
      </div>
    </div>
  );
}

function Container284() {
  return (
    <div className="content-stretch flex flex-col items-end mb-[-0.5px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">$402.15</p>
      </div>
    </div>
  );
}

function Container286() {
  return (
    <div className="relative shrink-0 size-[6.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="6.66667" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667" width="6.66667">
        <g id="Container">
          <path d={svgPaths.p3956ef00} fill="#1B6D24" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container285() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Container286 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b6d24] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">0.8%</p>
      </div>
    </div>
  );
}

function Container283() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container284 />
        <Container285 />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Border">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[9px] relative size-full">
          <Container279 />
          <Container283 />
        </div>
      </div>
    </div>
  );
}

function Background32() {
  return (
    <div className="bg-[#e1e3e3] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">TSLA</p>
      </div>
    </div>
  );
}

function Container289() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Tesla</p>
      </div>
    </div>
  );
}

function Container290() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Auto</p>
      </div>
    </div>
  );
}

function Container288() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container289 />
      <Container290 />
    </div>
  );
}

function Container287() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Background32 />
        <Container288 />
      </div>
    </div>
  );
}

function Container292() {
  return (
    <div className="content-stretch flex flex-col items-end mb-[-0.5px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">$192.50</p>
      </div>
    </div>
  );
}

function Container294() {
  return (
    <div className="relative shrink-0 size-[6.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="6.66667" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667" width="6.66667">
        <g id="Container">
          <path d={svgPaths.p135a2980} fill="#BA1A1A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container293() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Container294 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">2.1%</p>
      </div>
    </div>
  );
}

function Container291() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container292 />
        <Container293 />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Border">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[9px] relative size-full">
          <Container287 />
          <Container291 />
        </div>
      </div>
    </div>
  );
}

function Background33() {
  return (
    <div className="bg-[#e1e3e3] relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%+0.01px)] text-[#191c1d] text-[12px] text-center top-[calc(50%-0.5px)] whitespace-nowrap">
        <p className="leading-[16px]">GOOGL</p>
      </div>
    </div>
  );
}

function Container297() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Alphabet</p>
      </div>
    </div>
  );
}

function Container298() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Tech</p>
      </div>
    </div>
  );
}

function Container296() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container297 />
      <Container298 />
    </div>
  );
}

function Container295() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Background33 />
        <Container296 />
      </div>
    </div>
  );
}

function Container300() {
  return (
    <div className="content-stretch flex flex-col items-end mb-[-0.5px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">$145.20</p>
      </div>
    </div>
  );
}

function Container302() {
  return (
    <div className="relative shrink-0 size-[6.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="6.66667" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667" width="6.66667">
        <g id="Container">
          <path d={svgPaths.p3956ef00} fill="#1B6D24" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container301() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Container302 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b6d24] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">0.5%</p>
      </div>
    </div>
  );
}

function Container299() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container300 />
        <Container301 />
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Border">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[9px] pr-[9.01px] py-[9px] relative size-full">
          <Container295 />
          <Container299 />
        </div>
      </div>
    </div>
  );
}

function Container270() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pr-[8px] relative size-full">
          <WatchlistItems />
          <Border1 />
          <Border2 />
          <Border3 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#bfc9c4] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[2.5px] pt-[14.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[11px] text-center tracking-[0.55px] whitespace-nowrap">
          <p className="leading-[16px]">View All Watchlists</p>
        </div>
      </div>
    </div>
  );
}

function TopMoversWatchlistSpans4ColsOnDesktop() {
  return (
    <div className="bg-[#f8fafa] col-[1/span_4] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.04)] h-[400px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Top Movers / Watchlist (Spans 4 cols on desktop)">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[17px] relative size-full">
        <Margin12 />
        <Container270 />
        <HorizontalBorder6 />
      </div>
    </div>
  );
}

function Heading31() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">My Positions</p>
        </div>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Stocks</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">ETFs</p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Crypto</p>
      </div>
    </div>
  );
}

function Container303() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button29 />
        <Button30 />
        <Button31 />
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#bfc9c4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[9px] relative size-full">
          <Heading31 />
          <Container303 />
        </div>
      </div>
    </div>
  );
}

function Margin13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <HorizontalBorder7 />
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[227.92px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[11px] tracking-[0.55px] whitespace-nowrap">
          <p className="leading-[16px]">Asset</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[63.36px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end p-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[11px] text-right tracking-[0.55px] whitespace-nowrap">
          <p className="leading-[16px]">Shares</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[89.59px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end p-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[11px] text-right tracking-[0.55px] whitespace-nowrap">
          <p className="leading-[16px]">Price</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[113.09px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end p-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[11px] text-right tracking-[0.55px] whitespace-nowrap">
          <p className="leading-[16px]">Total Value</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative shrink-0 w-[82.7px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end p-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[11px] text-right tracking-[0.55px] whitespace-nowrap">
          <p className="leading-[16px]">Return</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden className="absolute border-[rgba(191,201,196,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
    </div>
  );
}

function Background34() {
  return (
    <div className="bg-[#e6e8e8] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">VTI</p>
      </div>
    </div>
  );
}

function Container305() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Vanguard Total Stock</p>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="relative shrink-0 w-[211.92px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Background34 />
        <Container305 />
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="relative shrink-0 w-[71.36px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pl-[16px] pr-[8px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">45.5</p>
        </div>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="relative shrink-0 w-[89.59px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[8px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">$256.40</p>
        </div>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="relative shrink-0 w-[113.09px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[8px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">$11,666.20</p>
        </div>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="relative shrink-0 w-[82.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[8px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b6d24] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">+8.4%</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(191,201,196,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-px pl-[8px] relative size-full">
          <Data />
          <Data1 />
          <Data2 />
          <Data3 />
          <Data4 />
        </div>
      </div>
    </div>
  );
}

function Background35() {
  return (
    <div className="bg-[#e6e8e8] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">AAPL</p>
      </div>
    </div>
  );
}

function Container306() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Apple Inc.</p>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[211.92px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Background35 />
        <Container306 />
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[71.36px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pl-[16px] pr-[8px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">20</p>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[89.59px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[8px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">$185.92</p>
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[113.09px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[8px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">$3,718.40</p>
        </div>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[82.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[8px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b6d24] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">+12.1%</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(191,201,196,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-px pl-[8px] relative size-full">
          <Data5 />
          <Data6 />
          <Data7 />
          <Data8 />
          <Data9 />
        </div>
      </div>
    </div>
  );
}

function Background36() {
  return (
    <div className="bg-[#e6e8e8] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">BTC</p>
      </div>
    </div>
  );
}

function Container307() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Bitcoin</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[211.92px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Background36 />
        <Container307 />
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[71.36px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pl-[16px] pr-[8px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">0.25</p>
        </div>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[89.59px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[8px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">$65,200</p>
        </div>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[113.09px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[8px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">$16,300.00</p>
        </div>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[82.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[8px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b6d24] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">+45.2%</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(191,201,196,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-px pl-[8px] relative size-full">
          <Data10 />
          <Data11 />
          <Data12 />
          <Data13 />
          <Data14 />
        </div>
      </div>
    </div>
  );
}

function Background37() {
  return (
    <div className="bg-[#e6e8e8] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">VXUS</p>
      </div>
    </div>
  );
}

function Container308() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Vanguard Int. Stock</p>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[211.92px]" data-name="Data">
      <Background37 />
      <Container308 />
    </div>
  );
}

function Data16() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[16px] pl-[16px] pr-[8px] pt-[16.5px] relative shrink-0 w-[71.36px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">150</p>
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[16px] pt-[16.5px] px-[8px] relative shrink-0 w-[89.59px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">$60.50</p>
      </div>
    </div>
  );
}

function Data18() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[16px] pt-[16.5px] px-[8px] relative shrink-0 w-[113.09px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">$9,075.00</p>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[16px] pt-[16.5px] px-[8px] relative shrink-0 w-[82.7px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">-1.5%</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[8px] relative size-full">
          <Data15 />
          <Data16 />
          <Data17 />
          <Data18 />
          <Data19 />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[500px] relative shrink-0 w-full" data-name="Table">
      <HeaderRow />
      <Body />
    </div>
  );
}

function Container304() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <Table />
      </div>
    </div>
  );
}

function CurrentHoldingsSpans8ColsOnDesktop() {
  return (
    <div className="bg-[#f8fafa] col-[5/span_8] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.04)] h-[400px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Current Holdings (Spans 8 cols on desktop)">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Margin13 />
        <Container304 />
      </div>
    </div>
  );
}

function SectionBentoGridLayoutForInvestments() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_400px] relative shrink-0 w-full" data-name="Section - Bento Grid Layout for Investments">
      <TopMoversWatchlistSpans4ColsOnDesktop />
      <CurrentHoldingsSpans8ColsOnDesktop />
    </div>
  );
}

function Heading32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] w-full">
          <p className="leading-[28px]">Asset Allocation</p>
        </div>
      </div>
    </div>
  );
}

function Container310() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Diversified</p>
      </div>
    </div>
  );
}

function InnerCircleForDonutHole() {
  return (
    <div className="bg-[#f8fafa] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[160px] items-center justify-center relative rounded-[9999px] shrink-0 w-full" data-name="Inner circle for donut hole">
      <Container310 />
    </div>
  );
}

function SimpleCssPieChartRepresentation() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[16px] relative rounded-[9999px] shrink-0 size-[192px]" data-name="Simple CSS Pie Chart Representation">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 pointer-events-none rounded-[9999px]" />
      <InnerCircleForDonutHole />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Margin14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[12px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <div className="bg-[#1b6d24] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
      </div>
    </div>
  );
}

function Container312() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">US Stocks</p>
        </div>
      </div>
    </div>
  );
}

function Container313() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">45%</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[9px] relative size-full">
          <Margin14 />
          <Container312 />
          <Container313 />
        </div>
      </div>
    </div>
  );
}

function Margin15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[12px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <div className="bg-[#a0f399] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
      </div>
    </div>
  );
}

function Container314() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Int Stocks</p>
        </div>
      </div>
    </div>
  );
}

function Container315() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">30%</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[9px] relative size-full">
          <Margin15 />
          <Container314 />
          <Container315 />
        </div>
      </div>
    </div>
  );
}

function Margin16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[12px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <div className="bg-[#004d40] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
      </div>
    </div>
  );
}

function Container316() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Crypto</p>
        </div>
      </div>
    </div>
  );
}

function Container317() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">20%</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[9px] relative size-full">
          <Margin16 />
          <Container316 />
          <Container317 />
        </div>
      </div>
    </div>
  );
}

function Margin17() {
  return (
    <div className="h-[16px] relative shrink-0 w-[12px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <div className="bg-[#e1e3e3] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
      </div>
    </div>
  );
}

function Container318() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Cash</p>
        </div>
      </div>
    </div>
  );
}

function Container319() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">5%</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(191,201,196,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[9px] relative size-full">
          <Margin17 />
          <Container318 />
          <Container319 />
        </div>
      </div>
    </div>
  );
}

function Container311() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start justify-center min-w-px relative" data-name="Container">
      <BackgroundBorder2 />
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container309() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <SimpleCssPieChartRepresentation />
        <Container311 />
      </div>
    </div>
  );
}

function SectionAssetAllocationGlassmorphismInspiredCard() {
  return (
    <div className="backdrop-blur-[6px] drop-shadow-[0px_8px_12px_rgba(0,0,0,0.06)] relative rounded-[12px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(162.87124327099673deg, rgb(248, 250, 250) 0%, rgb(242, 244, 244) 100%)" }} data-name="Section - Asset Allocation (Glassmorphism inspired card)">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <Heading32 />
        <Container309 />
      </div>
    </div>
  );
}

function Container261() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[1152px] relative shrink-0 w-full" data-name="Container">
      <SectionPortfolioHeaderChart />
      <SectionBentoGridLayoutForInvestments />
      <SectionAssetAllocationGlassmorphismInspiredCard />
    </div>
  );
}

function MainScrollableContent1() {
  return (
    <div className="bg-[#f8fafa] flex-[1_0_0] min-h-px relative w-full z-[1]" data-name="Main - Scrollable Content">
      <div className="content-stretch flex flex-col items-start p-[48px] relative size-full">
        <Container261 />
      </div>
    </div>
  );
}

function MainContentArea2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[1145px] isolate items-start min-w-px overflow-x-clip overflow-y-auto relative z-[1]" data-name="Main Content Area">
      <HeaderTopAppBarMobileDesktop />
      <MainScrollableContent1 />
    </div>
  );
}

function LedgrInvest() {
  return (
    <div className="absolute content-stretch flex h-[1145px] isolate items-start left-0 top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 250) 0%, rgb(248, 250, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Ledgr - Invest">
      <DesktopSideNavigation />
      <MainContentArea2 />
    </div>
  );
}

function Container321() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
        <g id="Container">
          <path d={svgPaths.p214f7400} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background38() {
  return (
    <div className="bg-[#00342b] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container321 />
    </div>
  );
}

function Heading33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Ledgr</p>
      </div>
    </div>
  );
}

function Container320() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background38 />
      <Heading33 />
    </div>
  );
}

function Margin19() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Container320 />
      </div>
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#bfc9c4] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[25px] pt-[24px] px-[24px] relative size-full">
        <Margin19 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Financial Clarity</p>
        </div>
      </div>
    </div>
  );
}

function Margin18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <HorizontalBorder8 />
      </div>
    </div>
  );
}

function Container323() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container324() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link30() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Container323 />
          <Container324 />
        </div>
      </div>
    </div>
  );
}

function Container325() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p5df7b00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container326() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Accounts</p>
      </div>
    </div>
  );
}

function Link31() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Container325 />
          <Container326 />
        </div>
      </div>
    </div>
  );
}

function Container327() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
        <g id="Container">
          <path d={svgPaths.p396ca1c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container328() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Transactions</p>
      </div>
    </div>
  );
}

function Link32() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Container327 />
          <Container328 />
        </div>
      </div>
    </div>
  );
}

function Container329() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container330() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Reports</p>
      </div>
    </div>
  );
}

function Link33() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Container329 />
          <Container330 />
        </div>
      </div>
    </div>
  );
}

function Container331() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p1589e300} fill="#217128" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container332() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#217128] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Link34() {
  return (
    <div className="bg-[#a0f399] opacity-80 relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <Container331 />
          <Container332 />
        </div>
      </div>
    </div>
  );
}

function Container322() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
          <Link30 />
          <Link31 />
          <Link32 />
          <Link33 />
          <Link34 />
        </div>
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="bg-[#00342b] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Link Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container334() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
        <g id="Container">
          <path d={svgPaths.p16f8b100} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container335() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Help Center</p>
      </div>
    </div>
  );
}

function Link35() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container334 />
          <Container335 />
        </div>
      </div>
    </div>
  );
}

function Container336() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Container">
          <path d={svgPaths.p2b55a3c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container337() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Logout</p>
      </div>
    </div>
  );
}

function Link36() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container336 />
          <Container337 />
        </div>
      </div>
    </div>
  );
}

function Container333() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Link35 />
        <Link36 />
      </div>
    </div>
  );
}

function HorizontalBorder9() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#bfc9c4] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-[17px] px-[16px] relative size-full">
        <Button32 />
        <Container333 />
      </div>
    </div>
  );
}

function SideNavBarDesktop2() {
  return (
    <div className="bg-[#f2f4f4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col h-full items-start justify-between pr-px relative shrink-0 w-[256px] z-[2]" data-name="SideNavBar (Desktop)">
      <div aria-hidden className="absolute border-[#bfc9c4] border-r border-solid inset-0 pointer-events-none" />
      <Margin18 />
      <Container322 />
      <HorizontalBorder9 />
    </div>
  );
}

function Container341() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button33() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[16px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container341 />
    </div>
  );
}

function Container342() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p1589e300} fill="#00342B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button34() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[18px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#00342b] border-b-2 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container342 />
    </div>
  );
}

function UserProfileAvatar4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="User profile avatar">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfileAvatar3} />
      </div>
    </div>
  );
}

function Border4() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <UserProfileAvatar4 />
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Margin20() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pl-[8px] relative shrink-0 w-[40px]" data-name="Margin">
      <Border4 />
    </div>
  );
}

function Container340() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button33 />
      <Button34 />
      <Margin20 />
    </div>
  );
}

function Container339() {
  return (
    <div className="flex-[1_0_0] h-[64px] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[823.97px] pr-[48px] relative size-full">
          <Container340 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar1() {
  return (
    <div className="bg-[#f8fafa] content-stretch flex items-start justify-center pb-px relative shrink-0 w-full z-[2]" data-name="Header - TopAppBar">
      <div aria-hidden className="absolute border-[#bfc9c4] border-b border-solid inset-0 pointer-events-none" />
      <Container339 />
    </div>
  );
}

function Heading34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[32px] tracking-[-0.64px] w-full">
        <p className="leading-[40px]">Settings</p>
      </div>
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="User Avatar">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserAvatar} />
      </div>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <UserAvatar />
      </div>
      <div aria-hidden className="absolute border-2 border-[#f2f4f4] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Alex Morgan</p>
      </div>
    </div>
  );
}

function Container346() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">alex.morgan@example.com</p>
      </div>
    </div>
  );
}

function Container345() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading35 />
      <Container346 />
    </div>
  );
}

function Container344() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <OverlayBorderShadow />
        <Container345 />
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Edit</p>
        </div>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="bg-white col-[1/span_12] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[82px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Profile Card">
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container344 />
          <Button35 />
        </div>
      </div>
    </div>
  );
}

function Container348() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background39() {
  return (
    <div className="bg-[#e6e8e8] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container348 />
    </div>
  );
}

function Heading36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Personal Information</p>
      </div>
    </div>
  );
}

function Container350() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Update your name, email, and phone</p>
      </div>
    </div>
  );
}

function Container349() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading36 />
      <Container350 />
    </div>
  );
}

function Container347() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background39 />
      <Container349 />
    </div>
  );
}

function Container351() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.4 12" width="7.4">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Container347 />
          <Container351 />
        </div>
      </div>
    </div>
  );
}

function PersonalInformation() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Personal Information">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Link37 />
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container353() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p2bdb86e0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background40() {
  return (
    <div className="bg-[#e6e8e8] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container353 />
    </div>
  );
}

function Heading37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Security</p>
      </div>
    </div>
  );
}

function Container355() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Password, 2FA, connected devices</p>
      </div>
    </div>
  );
}

function Container354() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading37 />
      <Container355 />
    </div>
  );
}

function Container352() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background40 />
        <Container354 />
      </div>
    </div>
  );
}

function Container356() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.4 12" width="7.4">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div aria-hidden className="absolute border-[#bfc9c4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative size-full">
          <Container352 />
          <Container356 />
        </div>
      </div>
    </div>
  );
}

function Security() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Security">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Link38 />
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container357() {
  return (
    <div className="h-[20.05px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20.05" preserveAspectRatio="none" viewBox="0 0 20 20.05" width="20">
        <g id="Container">
          <path d={svgPaths.p3f50100} fill="#7EBDAC" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background41() {
  return (
    <div className="bg-[#004d40] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container357 />
      </div>
    </div>
  );
}

function Heading38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Notifications</p>
      </div>
    </div>
  );
}

function Container359() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Manage your alerts and summaries</p>
      </div>
    </div>
  );
}

function Container358() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading38 />
        <Container359 />
      </div>
    </div>
  );
}

function HorizontalBorder10() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#bfc9c4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pb-[25px] pt-[24px] px-[24px] relative size-full">
          <Background41 />
          <Container358 />
        </div>
      </div>
    </div>
  );
}

function Container363() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Large Transactions</p>
      </div>
    </div>
  );
}

function Container364() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Alert me for transfers over $1,000</p>
      </div>
    </div>
  );
}

function Container362() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container363 />
      <Container364 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <div className="h-[24px] pointer-events-none relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background+Shadow">
        <div aria-hidden className="absolute bg-[#00342b] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="absolute bg-white left-[22px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background+Border">
        <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container361() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Container362 />
          <Label2 />
        </div>
      </div>
    </div>
  );
}

function Container367() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Weekly Summary</p>
      </div>
    </div>
  );
}

function Container368() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Receive a weekly digest of your spending</p>
      </div>
    </div>
  );
}

function Container366() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container367 />
      <Container368 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <div className="h-[24px] pointer-events-none relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background+Shadow">
        <div aria-hidden className="absolute bg-[#e6e8e8] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="absolute bg-white left-[2px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background+Border">
        <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container365() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Container366 />
          <Label3 />
        </div>
      </div>
    </div>
  );
}

function Container371() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Unusual Activity</p>
      </div>
    </div>
  );
}

function Container372() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Alerts for suspicious login attempts</p>
      </div>
    </div>
  );
}

function Container370() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container371 />
      <Container372 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <div className="h-[24px] pointer-events-none relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background+Shadow">
        <div aria-hidden className="absolute bg-[#00342b] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="absolute bg-white left-[22px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background+Border">
        <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container369() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Container370 />
          <Label4 />
        </div>
      </div>
    </div>
  );
}

function Container360() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Container361 />
        <Container365 />
        <Container369 />
      </div>
    </div>
  );
}

function NotificationsExpandedDetailedCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Notifications (Expanded/Detailed Card)">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder10 />
        <Container360 />
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container374() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p7eb0b80} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background42() {
  return (
    <div className="bg-[#e6e8e8] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container374 />
    </div>
  );
}

function Heading39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Preferences</p>
      </div>
    </div>
  );
}

function Container376() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Theme, language, and display settings</p>
      </div>
    </div>
  );
}

function Container375() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading39 />
      <Container376 />
    </div>
  );
}

function Container373() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background42 />
      <Container375 />
    </div>
  );
}

function Container377() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.4 12" width="7.4">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Container373 />
          <Container377 />
        </div>
      </div>
    </div>
  );
}

function Preferences() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Preferences">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Link39 />
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container379() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background43() {
  return (
    <div className="bg-[#e6e8e8] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container379 />
    </div>
  );
}

function Heading40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">{`Help & Support`}</p>
      </div>
    </div>
  );
}

function Container381() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">FAQ, contact us, feedback</p>
      </div>
    </div>
  );
}

function Container380() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading40 />
      <Container381 />
    </div>
  );
}

function Container378() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background43 />
      <Container380 />
    </div>
  );
}

function Container382() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.4 12" width="7.4">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Container378 />
          <Container382 />
        </div>
      </div>
    </div>
  );
}

function HelpSupport() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Help & Support">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Link40 />
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function SettingsCategories() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Settings Categories">
      <PersonalInformation />
      <Security />
      <NotificationsExpandedDetailedCard />
      <Preferences />
      <HelpSupport />
    </div>
  );
}

function SettingsCategoriesMargin() {
  return (
    <div className="col-[1/span_12] content-stretch flex flex-col items-start justify-self-stretch pt-[8px] relative row-2 self-start shrink-0" data-name="Settings Categories:margin">
      <SettingsCategories />
    </div>
  );
}

function SettingsGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[__82px_776px] relative shrink-0 w-full" data-name="Settings Grid">
      <ProfileCard />
      <SettingsCategoriesMargin />
    </div>
  );
}

function Container343() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Container">
      <Heading34 />
      <SettingsGrid />
    </div>
  );
}

function MainContent1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full z-[1]" data-name="Main Content">
      <div className="content-stretch flex flex-col items-start px-[128px] py-[32px] relative size-full">
        <Container343 />
      </div>
    </div>
  );
}

function Container338() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full isolate items-start min-w-px overflow-clip relative z-[1]" data-name="Container">
      <HeaderTopAppBar1 />
      <MainContent1 />
    </div>
  );
}

function LedgrSettings() {
  return (
    <div className="absolute bottom-0 content-stretch flex isolate items-start left-0 top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 250) 0%, rgb(248, 250, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Ledgr - Settings">
      <SideNavBarDesktop2 />
      <Container338 />
    </div>
  );
}

function Heading41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[20px] w-full">
        <p className="leading-[28px]">Ledgr</p>
      </div>
    </div>
  );
}

function Container384() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[12px] w-full">
        <p className="leading-[16px]">Financial Clarity</p>
      </div>
    </div>
  );
}

function Container383() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading41 />
      <Container384 />
    </div>
  );
}

function Margin21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container383 />
      </div>
    </div>
  );
}

function Container386() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container387() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link41() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container386 />
          <Container387 />
        </div>
      </div>
    </div>
  );
}

function Container388() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p5df7b00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container389() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Accounts</p>
      </div>
    </div>
  );
}

function Link42() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container388 />
          <Container389 />
        </div>
      </div>
    </div>
  );
}

function Container390() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
        <g id="Container">
          <path d={svgPaths.p396ca1c0} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container391() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Transactions</p>
      </div>
    </div>
  );
}

function Link43() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container390 />
          <Container391 />
        </div>
      </div>
    </div>
  );
}

function Container392() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container393() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Reports</p>
      </div>
    </div>
  );
}

function Link44() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container392 />
          <Container393 />
        </div>
      </div>
    </div>
  );
}

function Container394() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container395() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Link45() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container394 />
          <Container395 />
        </div>
      </div>
    </div>
  );
}

function Container385() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Link41 />
        <Link42 />
        <Link43 />
        <Link44 />
        <Link45 />
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="bg-[#00342b] content-stretch flex flex-col items-center justify-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Link Account</p>
      </div>
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Button:margin">
      <Button36 />
    </div>
  );
}

function Container397() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="#217128" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container398() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#217128] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Help Center</p>
      </div>
    </div>
  );
}

function Link46() {
  return (
    <div className="bg-[#a0f399] opacity-80 relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container397 />
          <Container398 />
        </div>
      </div>
    </div>
  );
}

function Container399() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="#3F4945" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container400() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Logout</p>
      </div>
    </div>
  );
}

function Link47() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container399 />
          <Container400 />
        </div>
      </div>
    </div>
  );
}

function Container396() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <ButtonMargin1 />
        <Link46 />
        <Link47 />
      </div>
    </div>
  );
}

function SideNavBarDesktop3() {
  return (
    <div className="bg-[#f2f4f4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[8px] h-[496px] items-start pl-[16px] pr-[17px] py-[16px] relative shrink-0 w-[256px] z-[2]" data-name="SideNavBar (Desktop)">
      <div aria-hidden className="absolute border-[#bfc9c4] border-r border-solid inset-0 pointer-events-none" />
      <Margin21 />
      <Container385 />
      <Container396 />
    </div>
  );
}

function Heading42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[32px] tracking-[-0.64px] whitespace-nowrap">
        <p className="leading-[40px]">{`Help & Support`}</p>
      </div>
    </div>
  );
}

function Container403() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Find answers or reach out to our team.</p>
      </div>
    </div>
  );
}

function Container402() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Heading42 />
      <Container403 />
    </div>
  );
}

function Container404() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 20 18" width="20">
        <g id="Container">
          <path d={svgPaths.p20cc9b00} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button37() {
  return (
    <div className="bg-[#00342b] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[7.99px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container404 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Contact Support</p>
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Page Header">
      <Container402 />
      <Button37 />
    </div>
  );
}

function Container405() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[16px] w-full">
          <p className="leading-[normal]">Search for help...</p>
        </div>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[49px] pr-[17px] py-[18px] relative size-full">
          <Container405 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container406() {
  return (
    <div className="absolute bottom-[29.31%] content-stretch flex flex-col items-start left-[16px] top-[29.31%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
          <path d={svgPaths.p8a35e00} fill="#707975" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Search Bar">
      <Input5 />
      <Container406 />
    </div>
  );
}

function Heading43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] w-full">
        <p className="leading-[28px]">Popular Questions</p>
      </div>
    </div>
  );
}

function Container407() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">How do I reset my password?</p>
      </div>
    </div>
  );
}

function Container408() {
  return (
    <div className="h-[7.4px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="7.4" preserveAspectRatio="none" viewBox="0 0 12 7.4" width="12">
        <g id="Container">
          <path d={svgPaths.p1adfde00} fill="#707975" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-[16px] relative size-full">
          <Container407 />
          <Container408 />
        </div>
      </div>
    </div>
  );
}

function AccordionItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Accordion Item 1">
      <div aria-hidden className="absolute border-[#bfc9c4] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative size-full">
        <Button38 />
      </div>
    </div>
  );
}

function Container409() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">How long do bank transfers take?</p>
      </div>
    </div>
  );
}

function Container410() {
  return (
    <div className="h-[7.4px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="7.4" preserveAspectRatio="none" viewBox="0 0 12 7.4" width="12">
        <g id="Container">
          <path d={svgPaths.p1adfde00} fill="#707975" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-[16px] relative size-full">
          <Container409 />
          <Container410 />
        </div>
      </div>
    </div>
  );
}

function AccordionItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Accordion Item 2">
      <div aria-hidden className="absolute border-[#bfc9c4] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative size-full">
        <Button39 />
      </div>
    </div>
  );
}

function Container411() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Is my financial data secure?</p>
      </div>
    </div>
  );
}

function Container412() {
  return (
    <div className="h-[7.4px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="7.4" preserveAspectRatio="none" viewBox="0 0 12 7.4" width="12">
        <g id="Container">
          <path d={svgPaths.p1adfde00} fill="#707975" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-[16px] relative size-full">
          <Container411 />
          <Container412 />
        </div>
      </div>
    </div>
  );
}

function AccordionItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Accordion Item 3">
      <div aria-hidden className="absolute border-[#bfc9c4] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative size-full">
        <Button40 />
      </div>
    </div>
  );
}

function Container413() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">How do I link a new account?</p>
      </div>
    </div>
  );
}

function Container414() {
  return (
    <div className="h-[7.4px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="7.4" preserveAspectRatio="none" viewBox="0 0 12 7.4" width="12">
        <g id="Container">
          <path d={svgPaths.p1adfde00} fill="#707975" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function AccordionItem4Button() {
  return (
    <div className="relative shrink-0 w-full" data-name="Accordion Item 4 → Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-[16px] relative size-full">
          <Container413 />
          <Container414 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <AccordionItem />
        <AccordionItem1 />
        <AccordionItem2 />
        <AccordionItem4Button />
      </div>
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PopularTopics() {
  return (
    <div className="col-[1/span_8] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[115px] relative row-1 self-start shrink-0" data-name="Popular Topics">
      <Heading43 />
      <BackgroundBorderShadow2 />
    </div>
  );
}

function Heading44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] w-full">
        <p className="leading-[28px]">Categories</p>
      </div>
    </div>
  );
}

function Container416() {
  return (
    <div className="h-[17px] relative shrink-0 w-[19.85px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 19.85 17" width="19.85">
        <g id="Container">
          <path d={svgPaths.p23fbfe00} fill="#217128" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background44() {
  return (
    <div className="bg-[#a0f399] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container416 />
      </div>
    </div>
  );
}

function Container417() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Account Setup</p>
        </div>
      </div>
    </div>
  );
}

function Link48() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative size-full">
          <Background44 />
          <Container417 />
        </div>
      </div>
    </div>
  );
}

function Container418() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
        <g id="Container">
          <path d={svgPaths.p26835240} fill="#217128" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background45() {
  return (
    <div className="bg-[#a0f399] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container418 />
      </div>
    </div>
  );
}

function Container419() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Transactions</p>
        </div>
      </div>
    </div>
  );
}

function Link49() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative size-full">
          <Background45 />
          <Container419 />
        </div>
      </div>
    </div>
  );
}

function Container420() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p2bdb86e0} fill="#217128" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background46() {
  return (
    <div className="bg-[#a0f399] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container420 />
      </div>
    </div>
  );
}

function Container421() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Security</p>
        </div>
      </div>
    </div>
  );
}

function Link50() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative size-full">
          <Background46 />
          <Container421 />
        </div>
      </div>
    </div>
  );
}

function Container422() {
  return (
    <div className="h-[22px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 15 22" width="15">
        <g id="Container">
          <path d={svgPaths.p9702480} fill="#217128" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background47() {
  return (
    <div className="bg-[#a0f399] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container422 />
      </div>
    </div>
  );
}

function Container423() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">App Issues</p>
        </div>
      </div>
    </div>
  );
}

function Link51() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Link">
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative size-full">
          <Background47 />
          <Container423 />
        </div>
      </div>
    </div>
  );
}

function Container415() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Link48 />
      <Link49 />
      <Link50 />
      <Link51 />
    </div>
  );
}

function CategoriesSidebar() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Categories Sidebar">
      <Heading44 />
      <Container415 />
    </div>
  );
}

function FaqBentoGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_388px] relative shrink-0 w-full" data-name="FAQ Bento Grid">
      <PopularTopics />
      <CategoriesSidebar />
    </div>
  );
}

function Heading45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#191c1d] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Still need help?</p>
      </div>
    </div>
  );
}

function Container425() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4945] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Our support team is available 24/7 to assist you.</p>
      </div>
    </div>
  );
}

function Container424() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading45 />
        <Container425 />
      </div>
    </div>
  );
}

function Button41() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#00342b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00342b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Chat Now</p>
      </div>
    </div>
  );
}

function Button42() {
  return (
    <div className="bg-[#00342b] content-stretch flex flex-col items-center justify-center pb-[9.5px] pt-[8.5px] px-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Email Us</p>
      </div>
    </div>
  );
}

function Container426() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Button41 />
        <Button42 />
      </div>
    </div>
  );
}

function StillNeedHelpSection() {
  return (
    <div className="bg-[#f2f4f4] relative rounded-[16px] shrink-0 w-full" data-name="Still Need Help Section">
      <div aria-hidden className="absolute border border-[#bfc9c4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[25px] relative size-full">
          <Container424 />
          <Container426 />
        </div>
      </div>
    </div>
  );
}

function Container401() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[896px] relative shrink-0 w-full" data-name="Container">
      <PageHeader />
      <SearchBar />
      <FaqBentoGrid />
      <StillNeedHelpSection />
    </div>
  );
}

function MainContentAreaMainCanvas() {
  return (
    <div className="bg-[#f8fafa] flex-[1_0_0] min-w-px relative self-stretch z-[1]" data-name="Main Content Area → Main Canvas">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[64px] py-[48px] relative size-full">
          <Container401 />
        </div>
      </div>
    </div>
  );
}

function LedgrHelpSupport() {
  return (
    <div className="absolute content-stretch flex isolate items-start left-0 top-0 w-[1280px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 250) 0%, rgb(248, 250, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Ledgr - Help & Support">
      <SideNavBarDesktop3 />
      <MainContentAreaMainCanvas />
    </div>
  );
}

export default function Group() {
  return (
    <div className="contents relative size-full">
      <HtmlBody />
      <HtmlBody1 />
      <HtmlBody2 />
      <HtmlBody3 />
      <HtmlBody4 />
      <LedgrDashboard />
      <LedgrInvest />
      <LedgrSettings />
      <LedgrHelpSupport />
    </div>
  );
}