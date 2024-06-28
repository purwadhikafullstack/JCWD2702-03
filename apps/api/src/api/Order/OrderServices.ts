// server/services/orderService.ts
import prisma from '@/prisma';

export const getAllOrders = async () => {
  return await prisma.transaction.findMany();
};

export const getOrdersByWarehouse = async (warehouseId: string) => {
  // Assuming you have a way to identify warehouseId in your Transaction model
  return await prisma.transaction.findMany({
    where: { warehouseId: Number(warehouseId) },
  });
};

export const confirmOrderPayment = async (transactionId: number, accepted: boolean) => {
  return await prisma.$transaction(async (tx) => {
    const transaction = await tx.transaction.findUnique({
      where: { id: transactionId },
    });

    if (!transaction) throw new Error('Transaction not found');

    const status = accepted ? 'Diproses' : 'Menunggu Pembayaran';
    
    const updatedTransaction = await tx.transaction.update({
      where: { id: transactionId },
      data: { status },
    });

    return updatedTransaction;
  });
};

export const sendOrder = async (transactionId: number) => {
  return await prisma.$transaction(async (tx) => {
    const transaction = await tx.transaction.findUnique({
      where: { id: transactionId },
    });

    if (!transaction) throw new Error('Transaction not found');

    const updatedTransaction = await tx.transaction.update({
      where: { id: transactionId },
      data: { status: 'Dikirim', shippedAt: new Date() },
    });

    return updatedTransaction;
  });
};

export const cancelOrder = async (transactionId: number) => {
  return await prisma.$transaction(async (tx) => {
    const transaction = await tx.transaction.findUnique({
      where: { id: transactionId },
    });

    if (!transaction) throw new Error('Transaction not found');

    if (transaction.status === 'Dikirim') {
      throw new Error('Cannot cancel order after it is shipped');
    }

    const updatedTransaction = await tx.transaction.update({
      where: { id: transactionId },
      data: { status: 'Cancelled' },
    });

    return updatedTransaction;
  });
};

export default {
  getAllOrders,
  getOrdersByWarehouse,
  confirmOrderPayment,
  sendOrder,
  cancelOrder,
};
