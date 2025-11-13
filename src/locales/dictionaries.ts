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
      badge: "AI bot trading",
      title: "スマートフォンひとつでプロの自動トレードを",
      subtitle:
        "D-invesmentはGPT、Gemini、Claude、GrokなどのAIを用いた投資手法で資産運用を最適化します。",
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
      profile: {
        title: "プロフィール情報",
        description: "Google認証から同期された登録情報です。",
        labels: {
          name: "氏名",
          email: "メールアドレス",
          registrationDate: "登録日",
        },
        fallbacks: {
          name: "未設定",
          email: "未設定",
          registrationDate: "不明",
        },
      },
      states: {
        loading: "プロフィールを読み込んでいます…",
      },
      sections: {
        connection: {
          title: "1540bo連携ステータス",
          description:
            "接続設定ページで連携すると、ボットの稼働状況がここに表示されます。",
          statusPlaceholder: "現在は接続設定ページとの連携を準備中です。",
          actionLabel: "接続設定を開く",
          actionHint:
            "接続設定ページでAPIキーを登録すると進行状況が同期されます。",
        },
        tools: {
          title: "ツール購入履歴",
          description: "購入した自動売買ツールの一覧がここに表示されます。",
          emptyState: "ツール購入ページと連携すると履歴が表示されます。",
          actionLabel: "近日公開",
          actionHint:
            "ツール購入ページが公開され次第ここからアクセスできます。",
        },
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
        "1540bo.orgとの連携状況やユーザーの認証状態を確認し、必要な運用タスクをまとめて管理できます。",
      states: {
        loading: "ダッシュボードを読み込んでいます…",
      },
      alerts: {
        misconfigured: "Supabaseのサービスロールキー（SUPABASE_SERVICE_ROLE_KEY）が設定されていません。環境変数を更新して管理者機能を有効化してください。",
        fetchFailed: "ユーザー一覧の取得に失敗しました。しばらくしてから再度お試しください。",
      },
      summary: {
        totalUsers: "登録ユーザー",
        totalUsersHint: "Supabase Authから取得した現在の登録数です。",
        maintenance: "メンテナンスモード",
        maintenanceHint: "メンテナンス切り替え機能は現在準備中です。",
        accounting: "決算情報",
        accountingHint: "決算ダッシュボードは今後のアップデートで追加予定です。",
        comingSoon: "Coming soon",
      },
      users: {
        title: "ユーザー一覧",
        description: "Supabase Authに登録されたユーザーを確認できます。",
        columns: {
          userId: "ユーザーID",
          email: "メールアドレス",
          name: "氏名",
          createdAt: "登録日時",
          lastSignIn: "最終ログイン",
          status: "確認状況",
        },
        status: {
          verified: "確認済み",
          pending: "未確認",
        },
        loading: "ユーザー情報を取得中です…",
        empty: "ユーザーが見つかりません。",
        unknown: "不明",
        refresh: "再読み込み",
        refreshing: "更新中…",
        lastSync: "最終取得",
      },
      maintenance: {
        title: "サイトメンテナンス",
        description:
          "全体メンテナンスモードの切り替え機能をここから管理します。",
        placeholder: "メンテナンスAPIとの連携を実装すると、ここから稼働状態を切り替えられます。",
        toggleLabel: "メンテナンス設定（準備中）",
        helpText: "運用フロー決定後にアクティブ化されます。",
      },
      accounting: {
        title: "決算・計数管理",
        description:
          "決算サマリーや入出金レポートをここで統合表示する予定です。",
        placeholder: "決算レポートAPIと連携すると、売上・費用・未収金などを集計表示します。",
        historyLink: "取引履歴を開く",
      },
      misc: {
        title: "追加機能",
        description: "権限管理・通知運用などの拡張機能が順次追加されます。",
        placeholder: "要件が固まり次第、このセクションに機能が表示されます。",
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
      profile: {
        title: "Profile details",
        description:
          "Information synced from your Google authentication profile.",
        labels: {
          name: "Full name",
          email: "Email",
          registrationDate: "Registration date",
        },
        fallbacks: {
          name: "Not provided",
          email: "Not provided",
          registrationDate: "Unknown",
        },
      },
      states: {
        loading: "Loading your profile…",
      },
      sections: {
        connection: {
          title: "1540bo connection",
          description:
            "Once you connect via the settings page, bot activity will appear here.",
          statusPlaceholder:
            "Integration with the connection settings page is in progress.",
          actionLabel: "Open connection settings",
          actionHint:
            "Set up the API key on the connection page to keep this status up to date.",
        },
        tools: {
          title: "Tool purchase history",
          description: "A list of purchased automation tools will be displayed here.",
          emptyState:
            "History will sync after the tool purchase page is connected.",
          actionLabel: "Coming soon",
          actionHint:
            "This button will activate when the tool marketplace launches.",
        },
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
        "Monitor Supabase Auth users, plan maintenance operations, and stage upcoming admin tools in one place.",
      states: {
        loading: "Loading dashboard…",
      },
      alerts: {
        misconfigured:
          "Supabase service role key (SUPABASE_SERVICE_ROLE_KEY) is not configured. Add it to the environment to enable admin features.",
        fetchFailed: "Unable to load the user list. Please try again shortly.",
      },
      summary: {
        totalUsers: "Registered users",
        totalUsersHint: "Live count fetched from Supabase Auth.",
        maintenance: "Maintenance mode",
        maintenanceHint: "The maintenance toggle will be wired up soon.",
        accounting: "Accounting",
        accountingHint: "Financial dashboards will be added in a future release.",
        comingSoon: "Coming soon",
      },
      users: {
        title: "User directory",
        description: "Review everyone who has registered via Supabase Auth.",
        columns: {
          userId: "User ID",
          email: "Email",
          name: "Name",
          createdAt: "Created",
          lastSignIn: "Last sign-in",
          status: "Status",
        },
        status: {
          verified: "Verified",
          pending: "Pending",
        },
        loading: "Fetching users…",
        empty: "No users found yet.",
        unknown: "Unknown",
        refresh: "Refresh",
        refreshing: "Refreshing…",
        lastSync: "Last sync",
      },
      maintenance: {
        title: "Site maintenance",
        description:
          "This control will toggle global maintenance mode once the backend workflow is ready.",
        placeholder: "Connect the maintenance API to change the live status directly from here.",
        toggleLabel: "Maintenance toggle (planned)",
        helpText: "Will activate when the operational process is finalized.",
      },
      accounting: {
        title: "Accounting & finance",
        description:
          "Future releases will surface settlements, revenue summaries, and outstanding balances.",
        placeholder: "Once the accounting service is connected, KPI and ledger metrics will appear here.",
        historyLink: "Open trade history",
      },
      misc: {
        title: "Additional tools",
        description: "Role management, notifications, and other admin utilities will land here.",
        placeholder: "As requirements solidify, this section will populate with new controls.",
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
