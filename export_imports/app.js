import person from './person.js';
// In the following case we are importing the default exported value from person.js
// It is not necessary to use {} here.
import pr from './person.js';

import { baseData } from './utility.js';
import { clean } from './utility.js';

// Using aliases:
import { clean as cl } from './utility.js';

// If we want to import everything from a file, we can use *
import * as bundled from './utility.js';
// and then use it as:
// bundled.clean
// bundled.baseData
