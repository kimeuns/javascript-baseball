const GAME = Object.freeze({
  START: '숫자 야구 게임을 시작합니다.',
  END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
});

const ASK = Object.freeze({
  NUMBERS: '숫자를 입력해주세요 : ',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
});

const INPUT = Object.freeze({
  RETRY: '1',
  END: '2',
});

module.exports = {
  GAME,
  ASK,
  INPUT,
};
