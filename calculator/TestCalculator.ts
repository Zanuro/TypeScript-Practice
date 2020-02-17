import { Calculator, test } from "./Calculator";


let c = new Calculator();
test(c, "3/1.5*4+2-1=");
c.clear_results();
test(c, "4/2.855-1+2.6-3.4=");
c.clear_results();
test(c, "4%2+3*5.245!=");
