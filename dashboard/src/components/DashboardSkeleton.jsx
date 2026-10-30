import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./DashboardSkeleton.css";

const WATCHLIST_ROWS = 9;
const NAV_ITEMS = [70, 60, 60, 45, 45, 40]; // Dashboard, Holdings, Positions, Orders, Funds, Apps

/* --- Left panel --- */
const WatchlistSkeleton = () => (
  <aside className="sk-watchlist">
    <div className="sk-indices">
      <div className="sk-index">
        <Skeleton width={65} height={14} />
        <Skeleton width={40} height={14} />
      </div>
      <div className="sk-index">
        <Skeleton width={65} height={14} />
        <Skeleton width={40} height={14} />
      </div>
    </div>

    <div className="sk-search">
      <Skeleton width={260} height={16} />
      <Skeleton width={45} height={16} />
    </div>

    <div className="sk-list">
      {Array.from({ length: WATCHLIST_ROWS }).map((_, i) => (
        <WatchlistRowSkeleton key={i} />
      ))}
    </div>
  </aside>
);

const WatchlistRowSkeleton = () => (
  <div className="sk-list-row">
    <Skeleton width={70} height={14} /> {/* symbol */}
    <div className="sk-list-row-right">
      <Skeleton width={50} height={14} /> {/* % change */}
      <Skeleton circle width={14} height={14} /> {/* up / down arrow */}
      <Skeleton width={50} height={14} /> {/* price */}
    </div>
  </div>
);

/* --- Right panel --- */
const NavSkeleton = () => (
  <header className="sk-nav">
    <Skeleton width={64} height={40} borderRadius={6} /> {/* logo */}
    <div className="sk-nav-links">
      {NAV_ITEMS.map((w, i) => (
        <Skeleton key={i} width={w} height={16} />
      ))}
      <div className="sk-nav-divider" />
      <Skeleton circle width={44} height={44} /> {/* avatar */}
    </div>
  </header>
);

const GreetingSkeleton = () => (
  <section className="sk-section sk-greeting">
    <Skeleton width={190} height={30} />
  </section>
);

const EquitySkeleton = () => (
  <section className="sk-section sk-equity">
    <Skeleton width={70} height={22} /> {/* "Equity" */}
    <div className="sk-equity-body">
      <div className="sk-equity-left">
        <Skeleton width={110} height={52} /> {/* 3.74k */}
        <Skeleton width={120} height={16} /> {/* Margin available */}
      </div>
      <div className="sk-equity-right">
        {[0, 1].map((i) => (
          <div className="sk-stat" key={i}>
            <Skeleton width={120} height={16} />
            <Skeleton width={40} height={16} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HoldingsSkeleton = () => (
  <section className="sk-holdings">
    <Skeleton width={130} height={24} /> {/* "Holdings (13)" */}
  </section>
);

const MainSkeleton = () => (
  <main className="sk-main">
    <NavSkeleton />
    <div className="sk-content">
      <GreetingSkeleton />
      <EquitySkeleton />
      <HoldingsSkeleton />
    </div>
  </main>
);

/* --- Page --- */
export default function DashboardSkeleton() {
  return (
    <SkeletonTheme baseColor="#ececec" highlightColor="#f7f7f7">
      <div className="sk-app" aria-busy="true" aria-label="Loading dashboard">
        <WatchlistSkeleton />
        <MainSkeleton />
      </div>
    </SkeletonTheme>
  );
}
