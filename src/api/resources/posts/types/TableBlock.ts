/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Beehiiv from "../../../index";

export interface TableBlock {
    /** The rows of the table. */
    rows: Beehiiv.TableCellData[][];
    /** Whether the first row is a header row. */
    headerRow?: boolean;
    /** Whether the first column is a header column. */
    headerColumn?: boolean;
}
