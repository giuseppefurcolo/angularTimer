# angularTimer
Angular Timer pays tribute to the classic analog clocks, displaying time digitally.

**Displaying Time (function whatNext):**
   - This function gets the current time (hours, minutes, and seconds) and extracts individual digits.
   - It uses these digits to determine the rotation angle and opacity for each line within multiple boxes.
   - The rotation and opacity are set based on predefined values stored in arrays (value1, value2, ..., value8).

**Arrays (value1, value2, ..., value8):**
   - Arrays storing predefined rotation angles for each digit (0-9) for different lines in the boxes.

**Dot Timer (function dotterTimer):**
   - Sets up an interval to call a function every 500 milliseconds and shows the dot when seconds are even,creating a blinking effect.

