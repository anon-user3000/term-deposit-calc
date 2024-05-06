# term-deposit-calc

CLI for informational term deposit calculation

## Assumptions:

-   The calculator is an informational application (precision of math library and javascript types are acceptable).
-   Interest rate is annual (which applies when investment term is "At Maturity" per given example).

## Design Decisions:

-   All time will be in decimal years.
-   All percentages will be decimal percentages (ex: 0.01 instead of 1%)
-   Result will be rounded only when shown to the user.
