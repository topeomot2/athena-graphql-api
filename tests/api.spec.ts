import setUp from './helpers/setup';
import tearDown from './helpers/teardown';

beforeAll(async () => {
  await setUp();
});

afterAll(async () => {
  await tearDown();
});

describe('WHO Stats Api', () => {
  test('/graphql should be the query endpoint', () => {
    expect(1).toBe(0);
  });

  test('initial countries query should return list of countries and from the Athena api', () => {
    expect(1).toBe(0);
  });

  test('another countries query should return list of countries and from the Cache', () => {
    expect(1).toBe(0);
  });

  test('initial indicators query should return list of indicators and from the Athena api', () => {
    expect(1).toBe(0);
  });

  test('another indicators query should return list of indicators and from the Cache', () => {
    expect(1).toBe(0);
  });

  test('initial indicatorCategories query should return list of indicators categories and from the Athena api', () => {
    expect(1).toBe(0);
  });

  test('another indicatorCategories query should return list of indicators categories and from the Cache', () => {
    expect(1).toBe(0);
  });

  test('initial stat query should return list of stat and from the Athena api', () => {
    expect(1).toBe(0);
  });

  test('another stat query should return list of stat and from the Cache', () => {
    expect(1).toBe(0);
  });
});
