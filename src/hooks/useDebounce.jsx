import { useState, useEffect } from "react";

const useDebounce = (element) => {
  const [copied, setCopied] = useState(JSON.parse(JSON.stringify(element)));

  return [copied, setCopied];
};

export default useDebounce;
