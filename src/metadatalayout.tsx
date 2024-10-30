// app/MetadataLayout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const MetadataLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>; // Simply render the children
};

export default MetadataLayout;
