import React from "react";

import Button from "./Button";

export default function CtaButton() {
  return (
    <Button choice="cta">
      <div className="btn-cta__text">
        <span className="btn-cta__text--bold">Try it free 7 days</span>
        <span className="btn-cta__text--light"> then $20/mo. thereafter</span>
      </div>
    </Button>
  );
}
