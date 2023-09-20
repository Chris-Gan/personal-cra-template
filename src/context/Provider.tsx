import { ComponentClass, ReactNode } from "react";

export const composeProviders =
  (...providers: any) =>
  ({ children }: { children: ReactNode }) =>
    providers.reduceRight(
      (child: ReactNode, ProviderWrapper: ComponentClass) => (
        <ProviderWrapper>{child}</ProviderWrapper>
      ),
      children
    );

const Provider = composeProviders();

export default Provider;
