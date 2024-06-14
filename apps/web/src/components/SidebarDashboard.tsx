import Link from 'next/link';
import Image from 'next/image';
import {
  MdProductionQuantityLimits,
  MdCategory,
  MdDashboardCustomize,
  MdDiscount,
  MdAppRegistration,
  MdEngineering,
  MdLogout,
  MdApps,
  MdPayment,
} from 'react-icons/md';
import { FaStoreAlt } from 'react-icons/fa';

export const SidebarDashboard = () => {
  return (
    <div className="min-h-screen p-2 space-y-2 w-60 bg-gray-800 text-white">
      <Link href={'/'}>
        <div className="flex items-center justify-center">
          <Image
            src={'/logoo.png'}
            alt="logo"
            width={10000}
            height={10000}
            priority={true}
            quality={100}
            className="w-[20vw] h-[20vh] object-cover"
          />
        </div>
      </Link>

      <div className="flex items-center p-2 space-x-4">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          alt=""
          className="w-12 h-12 rounded-full bg-gray-500"
        />
        <div>
          <h2 className="text-lg font-semibold">Admin</h2>
          <span className="flex items-center space-x-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xs hover:underline"
            >
              View profile
            </a>
          </span>
        </div>
      </div>
      <div className="divide-y divide-gray-300">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li>
            <Link
              rel="noopener noreferrer"
              href={'/admin/dashboard'}
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <MdDashboardCustomize className="w-5 h-5 fill-current" />
              <span className="font-sans font-semibold tracking-wide hover:text-red-600">
                DASHBOARD
              </span>
            </Link>
          </li>
          <li>
            <div className="collapse collapse-arrow">
              <input type="checkbox" />
              <div className="collapse-title flex items-center p-2 space-x-3 rounded-md">
                <MdApps className="w-5 h-5 fill-current" />
                <span className="font-sans font-semibold tracking-wide">
                  APPS
                </span>
              </div>
              <div className="collapse-content">
                <Link
                  rel="noopener noreferrer"
                  href={'/admin/product'}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <MdProductionQuantityLimits className="w-5 h-5 fill-current" />
                  <span className="font-sans font-semibold tracking-wide hover:text-red-600">
                    PRODUCT
                  </span>
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href={'/admin/category'}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <MdCategory className="w-5 h-5 fill-current" />
                  <span className="font-sans font-semibold tracking-wide hover:text-red-600">
                    CATEGORY
                  </span>
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href={'/admin/stok'}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <MdAppRegistration className="w-5 h-5 fill-current" />
                  <span className="font-sans font-semibold tracking-wide hover:text-red-600">
                    STOCK
                  </span>
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href={'/admin/discount'}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <MdDiscount className="w-5 h-5 fill-current" />
                  <span className="font-sans font-semibold tracking-wide hover:text-red-600">
                    DISCOUNT
                  </span>
                </Link>
              </div>
            </div>
          </li>
          <li className="pb-3">
            <Link
              rel="noopener noreferrer"
              href={'/admin/store'}
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <MdPayment className="w-5 h-5 fill-current" />
              <span className="font-sans font-semibold tracking-wide hover:text-red-600">
                TRANSACTION
              </span>
            </Link>
          </li>
          <li className="pb-3">
            <Link
              rel="noopener noreferrer"
              href={'/admin/store'}
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <FaStoreAlt className="w-5 h-5 fill-current" />
              <span className="font-sans font-semibold tracking-wide hover:text-red-600">
                STORE
              </span>
            </Link>
          </li>
          <li>
            <Link
              rel="noopener noreferrer"
              href={'/admin/user'}
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <MdEngineering className="w-5 h-5 fill-current" />
              <span className="font-sans font-semibold tracking-wide hover:text-red-600">
                USER
              </span>
            </Link>
          </li>
        </ul>
        <ul className="pt-4 pb-2 space-y-1 text-sm">
          <li>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <MdLogout className="w-5 h-5 fill-current" />
              <span className="font-sans font-semibold tracking-wide hover:text-red-600">
                LOGOUT
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
