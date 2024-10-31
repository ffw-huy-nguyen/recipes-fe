import BreadcrumbsMUI from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import styles from "./Breadcrumbs.module.scss";
import { IBreadcrumb } from "./IBreadcrumb";

export const Breadcrumbs = ({ items }: { items: IBreadcrumb[] }) => {
  return (
    <div role="presentation">
      <BreadcrumbsMUI aria-label="breadcrumb">
        {items.map((item, index) => (
          <Link
            key={item.href}
            underline="hover"
            color="inherit"
            href={item.href}
          >
            <span className={styles.breadcrumb}>{item.title}</span>
          </Link>
        ))}
      </BreadcrumbsMUI>
    </div>
  );
};
