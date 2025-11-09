export type Locale = "ja" | "en";

export const dictionaries = {
  ja: {
    meta: {
      title: "D-invesment | 1540bo.org自動ボットトレードプラットフォーム",
      description:
        "1540bo.orgと連携し、AIが安定モードからアクティブモードまで最適な取引戦略を自動実行するD-invesmentの公式プラットフォーム。",
    },
    nav: {
      top: "トップ",
      myPage: "マイページ",
      history: "取引履歴",
      connection: "接続設定",
      admin: "管理者パネル",
      signIn: "ログイン",
      getStarted: "無料で始める",
    },
    hero: {
      badge: "1540bo.org公式連携ボット",
      title: "スマートフォンひとつでプロの自動トレードを",
      subtitle:
        "D-invesmentは1540bo.orgと連携し、Nansenのような洗練された体験でAIトレードを自動化。安定・ミドル・アクティブのモードを切り替え、資金効率を最大化します。",
      ctaPrimary: "無料でアカウント作成",
      ctaSecondary: "デモを見る",
      trustedBy: "主要トレーダーが信頼",
      metrics: {
        executed: "累計自動取引",
        uptime: "稼働率",
        fillRate: "約定率",
      },
      metricValues: {
        executed: "1,540,000+",
        uptime: "99.97%",
        fillRate: "98.4%",
      },
    },
    heroCards: {
      scheduleTitle: "タイムスケジュール",
      scheduleBody:
        "市場に合わせて稼働時間を自動調整。東京・ロンドン・NYセッションをシームレスにカバー。",
      riskModesTitle: "リスクモード",
      riskModesBody:
        "安定 / ミドル / アクティブの3モードをワンタップ切替。各モードでAI戦略が再構成されます。",
      complianceTitle: "リスク＆コンプライアンス",
      complianceBody:
        "コンプライアンスデスクがすべての取引ログを監査し、透明性を確保します。",
    },
    features: {
      title: "D-invesmentが選ばれる理由",
      subtitle:
        "UXから戦略まで、1540bo.orgに最適化した自動トレード体験を提供します。",
      items: [
        {
          title: "リアルタイム同期",
          description:
            "API経由で残高・ポジション・約定ステータスを秒単位で同期。意思決定が遅れません。",
        },
        {
          title: "多層リスク管理",
          description:
            "モードごとに最大投資額・連続取引回数・ドローダウン制御を自動適用。",
        },
        {
          title: "スマート通知",
          description:
            "異常検知・勝率更新・入出金アラートをスマートフォンへプッシュ配信。",
        },
      ],
    },
    automationModes: {
      title: "3つの自動売買モード",
      description:
        "市場ボラティリティに応じたAIアルゴリズムをプリセット。タップ一つで切替可能です。",
      modes: [
        {
          name: "安定モード",
          tagline: "資本保全を最優先",
          details: [
            "低ボラティリティ資産のみを対象",
            "最大エントリー回数を自動制限",
            "証拠金維持率が閾値を下回ると一時停止",
          ],
        },
        {
          name: "ミドルモード",
          tagline: "リスクとリターンのバランス",
          details: [
            "テクニカルとニュースフローのハイブリッドシグナル",
            "ドローダウン5%で自動ヘッジ",
            "セッション切替時にポジション調整",
          ],
        },
        {
          name: "アクティブモード",
          tagline: "短期勝負で利益最大化",
          details: [
            "高頻度スキャル戦略を自動適用",
            "AIがボラティリティをリアルタイム学習",
            "勝率が閾値を下回ると保守モードへ戻す",
          ],
        },
      ],
    },
    timeline: {
      title: "わずか3ステップで自動化",
      steps: [
        {
          title: "アカウント登録",
          description:
            "メールアドレスと二段階認証を設定し、安全なログイン環境を整えます。",
        },
        {
          title: "1540bo.orgと接続",
          description:
            "APIキーを入力し、接続ステータスがグリーンになれば準備完了です。",
        },
        {
          title: "モードを選択",
          description:
            "安定・ミドル・アクティブのいずれかを選び、稼働スケジュールを設定します。",
        },
      ],
    },
    cta: {
      title: "D-invesmentでAI自動トレードを体験",
      subtitle:
        "無料プランから始めて、リアル市場データを使った検証とライブ取引へ移行できます。",
      primary: "今すぐ登録",
      secondary: "導入担当者に相談",
    },
    myPage: {
      title: "マイページ",
      registrationDate: "登録日",
      email: "メールアドレス",
      billingStatus: "決済ステータス",
      plan: "契約プラン",
      lastLogin: "最終ログイン",
      actions: {
        managePlan: "プランを変更",
        updateEmail: "メールを更新",
        securitySettings: "セキュリティ設定",
      },
      planOptions: {
        basic: "ベーシック",
        pro: "プロ",
        enterprise: "エンタープライズ",
      },
    },
    historyPage: {
      title: "取引履歴",
      subtitle:
        "1540bo.orgのAPIから取得した実際の自動取引ログがここに表示されます。",
      columns: {
        timestamp: "日時",
        asset: "銘柄",
        direction: "方向",
        stake: "投資額",
        result: "リザルト",
        mode: "モード",
      },
      filters: {
        mode: "モード",
        result: "リザルト",
        dateRange: "期間",
      },
      empty: "まだ取引履歴がありません。接続をオンにして取引を開始しましょう。",
    },
    connectionPage: {
      title: "接続設定",
      subtitle:
        "1540bo.orgアカウントとの接続状態や稼働スケジュール、モードを管理します。",
      connectionStatus: "接続ステータス",
      apiKey: "APIキー",
      schedule: "稼働スケジュール",
      timezone: "タイムゾーン",
      session: "セッション設定",
      stability: "安定モード",
      middle: "ミドルモード",
      active: "アクティブモード",
      actions: {
        connect: "接続する",
        disconnect: "接続を切る",
        save: "設定を保存",
      },
      toggles: {
        autoRestart: "ドローダウン時に自動再起動",
        newsFilter: "重要ニュース時は保守モードに切替",
        syncBalance: "残高を自動同期",
      },
      scheduleOptions: {
        tokyo: "東京セッション",
        london: "ロンドンセッション",
        newyork: "ニューヨークセッション",
      },
    },
    adminPage: {
      title: "管理者パネル",
      subtitle:
        "ユーザー、取引ログ、モード選択、決済情報を一括管理します。",
      metrics: {
        totalUsers: "登録ユーザー",
        activeConnections: "接続中アカウント",
        monthlyVolume: "月間取引額",
      },
      userTable: {
        user: "ユーザー",
        email: "メール",
        plan: "プラン",
        mode: "モード",
        status: "接続",
        lastActivity: "最終アクティビティ",
      },
      tradeOverview: {
        title: "最新取引概要",
      },
      paymentStats: {
        title: "決済状況",
        paid: "支払い済み",
        upcoming: "次回請求",
        overdue: "延滞",
      },
    },
    common: {
      modes: {
        stable: "安定",
        middle: "ミドル",
        active: "アクティブ",
      },
      status: {
        online: "接続中",
        offline: "切断",
        pending: "保留",
      },
      table: {
        rowsPerPage: "表示件数",
      },
      actions: {
        edit: "編集",
        view: "詳細",
      },
    },
  },
  en: {
    meta: {
      title: "D-invesment | Automated trading for 1540bo.org",
      description:
        "D-invesment automates trading on 1540bo.org with AI-driven strategies across Stable, Middle, and Active modes.",
    },
    nav: {
      top: "Home",
      myPage: "My Page",
      history: "Trade History",
      connection: "Connections",
      admin: "Admin",
      signIn: "Sign in",
      getStarted: "Get started",
    },
    hero: {
      badge: "Official 1540bo.org bot",
      title: "Professional automation from your phone",
      subtitle:
        "D-invesment links to 1540bo.org and delivers a polished Nansen-inspired experience with AI-controlled trading modes.",
      ctaPrimary: "Create free account",
      ctaSecondary: "Watch demo",
      trustedBy: "Trusted by top traders",
      metrics: {
        executed: "Automated trades",
        uptime: "Uptime",
        fillRate: "Fill rate",
      },
      metricValues: {
        executed: "1,540,000+",
        uptime: "99.97%",
        fillRate: "98.4%",
      },
    },
    heroCards: {
      scheduleTitle: "Scheduling",
      scheduleBody:
        "Align runtime with global sessions to cover Tokyo, London, and New York without gaps.",
      riskModesTitle: "Risk modes",
      riskModesBody:
        "Toggle Stable, Middle, and Active modes and let AI rebuild the strategy instantly.",
      complianceTitle: "Compliance",
      complianceBody:
        "A compliance desk audits every trade log to ensure full transparency.",
    },
    features: {
      title: "Why traders choose D-invesment",
      subtitle:
        "Every detail is tuned for automated trading on 1540bo.org, from UX to strategy orchestration.",
      items: [
        {
          title: "Real-time sync",
          description:
            "Balances, positions, and fills update every second so decisions never fall behind.",
        },
        {
          title: "Layered risk",
          description:
            "Each mode enforces default limits for stake size, streak length, and drawdown control.",
        },
        {
          title: "Smart alerts",
          description:
            "Push notifications highlight anomalies, win-rate changes, and funding events.",
        },
      ],
    },
    automationModes: {
      title: "Three automation modes",
      description:
        "AI algorithms adapt to volatility with pre-configured risk profiles you can switch instantly.",
      modes: [
        {
          name: "Stable",
          tagline: "Protecting capital",
          details: [
            "Targets low-volatility assets",
            "Caps daily entries automatically",
            "Pauses when maintenance margin drops",
          ],
        },
        {
          name: "Middle",
          tagline: "Balanced outcomes",
          details: [
            "Blends technical and news-driven signals",
            "Hedges automatically after 5% drawdown",
            "Rebalances between market sessions",
          ],
        },
        {
          name: "Active",
          tagline: "Maximize short-term gains",
          details: [
            "Applies high-frequency scalping tactics",
            "Learns volatility in real time",
            "Falls back to conservative mode when win-rate drops",
          ],
        },
      ],
    },
    timeline: {
      title: "Automate in three steps",
      steps: [
        {
          title: "Sign up",
          description:
            "Register with email, enable two-factor authentication, and secure your account.",
        },
        {
          title: "Connect 1540bo.org",
          description:
            "Paste the API key and wait for the connection indicator to turn green.",
        },
        {
          title: "Choose a mode",
          description:
            "Select Stable, Middle, or Active and schedule runtime blocks across sessions.",
        },
      ],
    },
    cta: {
      title: "Experience AI trading with D-invesment",
      subtitle:
        "Start on a free plan, validate with live market data, and upgrade when you are ready.",
      primary: "Register now",
      secondary: "Talk to an expert",
    },
    myPage: {
      title: "My Page",
      registrationDate: "Registration date",
      email: "Email",
      billingStatus: "Billing status",
      plan: "Plan",
      lastLogin: "Last login",
      actions: {
        managePlan: "Change plan",
        updateEmail: "Update email",
        securitySettings: "Security settings",
      },
      planOptions: {
        basic: "Basic",
        pro: "Pro",
        enterprise: "Enterprise",
      },
    },
    historyPage: {
      title: "Trade history",
      subtitle:
        "Live trading logs from the 1540bo.org API will appear here once the integration is finalized.",
      columns: {
        timestamp: "Timestamp",
        asset: "Asset",
        direction: "Direction",
        stake: "Stake",
        result: "Result",
        mode: "Mode",
      },
      filters: {
        mode: "Mode",
        result: "Result",
        dateRange: "Date range",
      },
      empty: "No trades yet. Turn on the connection to start automated execution.",
    },
    connectionPage: {
      title: "Connections",
      subtitle:
        "Manage the link to your 1540bo.org account, runtime schedule, and automation modes.",
      connectionStatus: "Connection status",
      apiKey: "API key",
      schedule: "Runtime schedule",
      timezone: "Time zone",
      session: "Session presets",
      stability: "Stable mode",
      middle: "Middle mode",
      active: "Active mode",
      actions: {
        connect: "Connect",
        disconnect: "Disconnect",
        save: "Save settings",
      },
      toggles: {
        autoRestart: "Auto-restart on drawdown",
        newsFilter: "Switch to safe mode on major news",
        syncBalance: "Sync balance automatically",
      },
      scheduleOptions: {
        tokyo: "Tokyo session",
        london: "London session",
        newyork: "New York session",
      },
    },
    adminPage: {
      title: "Admin panel",
      subtitle:
        "Centralize user management, trade logs, mode assignments, and billing insights.",
      metrics: {
        totalUsers: "Users",
        activeConnections: "Connected",
        monthlyVolume: "Monthly volume",
      },
      userTable: {
        user: "User",
        email: "Email",
        plan: "Plan",
        mode: "Mode",
        status: "Status",
        lastActivity: "Last activity",
      },
      tradeOverview: {
        title: "Latest trades",
      },
      paymentStats: {
        title: "Billing status",
        paid: "Paid",
        upcoming: "Upcoming",
        overdue: "Overdue",
      },
    },
    common: {
      modes: {
        stable: "Stable",
        middle: "Middle",
        active: "Active",
      },
      status: {
        online: "Online",
        offline: "Offline",
        pending: "Pending",
      },
      table: {
        rowsPerPage: "Rows",
      },
      actions: {
        edit: "Edit",
        view: "View",
      },
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export const defaultLocale: Locale = "ja";
export const fallbackLocale: Locale = "en";
