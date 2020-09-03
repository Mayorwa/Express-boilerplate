const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const adminService = require('../Services/Admin');

exports.isAdmin = catchAsync(async (req, res, next) => {
  if (req.user.role !== 'admin') {
    return next(
      new AppError('You do not have permission to perform this action', 403)
    );
  }
  const getAdmin = await adminService.getOne(req.user.id, true);

  if (!getAdmin) {
    return next(
      new AppError('You do not have permission to perform this action', 403)
    );
  }

  req.admin = getAdmin;
  next();
});

exports.isSuper = catchAsync(async (req, res, next) => {
  if (req.admin.role !== 'super-admin') {
    return next(
      new AppError('You do not have permission to perform this action', 403)
    );
  }

  next();
});

exports.isLevel4 = catchAsync(async (req, res, next) => {
  if (req.admin.role !== 'level-4') {
    return next(
      new AppError('You do not have permission to perform this action', 403)
    );
  }

  next();
});

exports.isLevel3 = catchAsync(async (req, res, next) => {
  if (req.admin.role !== 'level-3') {
    return next(
      new AppError('You do not have permission to perform this action', 403)
    );
  }

  next();
});

exports.isLevel2 = catchAsync(async (req, res, next) => {
  if (req.admin.role !== 'level-2') {
    return next(
      new AppError('You do not have permission to perform this action', 403)
    );
  }

  next();
});

exports.isLevel1 = catchAsync(async (req, res, next) => {
  if (req.admin.role !== 'level-1') {
    return next(
      new AppError('You do not have permission to perform this action', 403)
    );
  }

  next();
});

exports.isLevel0 = catchAsync(async (req, res, next) => {
  if (req.admin.role !== 'level-0') {
    return next(
      new AppError('You do not have permission to perform this action', 403)
    );
  }

  next();
});
