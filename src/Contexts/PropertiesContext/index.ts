import { createContext } from "react";

import type { Property } from "@/Types";

const PropertiesContext = createContext([] as Property[]);

export default PropertiesContext;
