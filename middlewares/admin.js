import UserRole from '../enums/UserRole.js'
import { StatusCodes } from 'http-status-codes'

export default (req, res, next) => {
  if (req.user.role !== UserRole.ADMIN) {
    res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: '沒有權限'
      // 如果不是管理員，回覆沒有權限，如果是管理員，下一步next()
    })
  } else {
    next()
  }
}
