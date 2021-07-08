'use strict';

module.exports.handle = async (event) => {
  return {
    statusCode: 500,
    body: JSON.stringify(
      {
        message: 'Not implemented.',
        input: event,
      },
      null,
      2
    ),
  };
};
