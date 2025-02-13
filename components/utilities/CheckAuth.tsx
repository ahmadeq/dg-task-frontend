import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const CheckAuth = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get("accessToken");
      if (!token) {
        router.push("/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  ComponentWithAuth.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ComponentWithAuth;
};

export default CheckAuth;
