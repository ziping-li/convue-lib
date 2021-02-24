import enquireJs from 'enquire.js';

export const queryMedia = (callback: any) => {
  enquireJs
    .register(`screen and (min-width: 1600px)`, () => {
      callback('xxl');
    })
    .register(
      `screen and (min-width: 1200px) and (max-width: 1600px)`,
      () => {
        callback('xl');
      }
    )
    .register(
      `screen and (min-width: 992px) and (max-width: 1200px)`,
      () => {
        callback('lg');
      }
    )
    .register(
      `screen and (min-width: 768px) and (max-width: 992px)`,
      () => {
        callback('md');
      }
    )
    .register(
      `screen and (min-width: 576px) and (max-width: 768px)`,
      () => {
        callback('sm');
      }
    )
    .register(`screen and (max-width: 576px)`, () => {
      callback('xs');
    });
};
