import classNames from "classnames";
import PropTypes from "prop-types";
import Image from "next/image";

import { Button } from "..";
import styles from "./Information.module.scss";

export const Information = (props) => {
  const { className } = props;

  return (
    <div className={styles["information"]}>
      <div>
        <span>Daha fazla bilgi</span> için lütfen bizimle iletişime geçin.
      </div>
      <Button
        text={"İletişim"}
        locale
        href={"#"}
        className={styles["block__button"]}
      />
    </div>
  );
};

Information.propTypes = {
  className: PropTypes.string,
};
