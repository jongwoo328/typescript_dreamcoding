{
  /**
   * Enum
   */

  // javascript에는 Enum이 없음.

  const MAX_NUMBER = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });

  const dayOfToday = DAYS_ENUM.MONDAY;

  // typescript
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Tuesday);

  // 필수적인 경우가 아니면 union type을 쓰는게 좋다
}
