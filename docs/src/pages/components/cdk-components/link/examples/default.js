import { DxcLink } from "@diaas/dxc-react-cdk";

const code = `() => {
  return (
    <p>
        This is a text with a <DxcLink href="#" text="Link"></DxcLink> to another page.
    </p>
  );
}`;

const scope = {
  DxcLink
};

export default { code, scope };
