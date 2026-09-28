'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Instagram,
  RefreshCw,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  Clock,
  KeyRound,
  Trash2,
  HelpCircle,
  Activity,
} from 'lucide-react';

interface AdminStatusResponse {
  state: {
    status: 'CONNECTED' | 'EXPIRING_SOON' | 'EXPIRED' | 'DISCONNECTED' | 'ERROR';
    last_sync_timestamp: string | null;
    last_successful_sync_timestamp: string | null;
    last_error: string | null;
    posts_count: number;
    account_username?: string;
    token_expires_at: string | null;
    token_days_remaining: number | null;
    is_seeded_data?: boolean;
  };
  is_configured: boolean;
  client_id_configured: boolean;
  redirect_uri?: string;
  has_token: boolean;
  token_masked: string | null;
  posts_count: number;
  timestamp: string;
}

export default function AdminInstagramPage() {
  const [adminKey, setAdminKey] = useState('');
  const [savedKey, setSavedKey] = useState('');
  const [statusData, setStatusData] = useState<AdminStatusResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  useEffect(() => {
    const key = localStorage.getItem('cd_admin_key') || '';
    if (key) {
      setSavedKey(key);
      setAdminKey(key);
      fetchStatus(key);
    } else {
      fetchStatus('');
    }
  }, []);

  async function fetchStatus(key: string) {
    setLoading(true);
    setActionError(null);
    try {
      const headers: Record<string, string> = {};
      if (key) {
        headers['Authorization'] = `Bearer ${key}`;
      }
      const res = await fetch('/api/admin/instagram/status', { headers });
      if (res.ok) {
        const data = await res.json();
        setStatusData(data);
      } else if (res.status === 401) {
        setActionError('Administrative authentication required. Please enter your ADMIN_SECRET_KEY below.');
      } else {
        setActionError('Failed to fetch Instagram admin status.');
      }
    } catch (err: any) {
      setActionError(err.message || 'Network error fetching status');
    } finally {
      setLoading(false);
    }
  }

  function handleSaveKey(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem('cd_admin_key', adminKey);
    setSavedKey(adminKey);
    fetchStatus(adminKey);
  }

  async function handleSyncNow() {
    setSyncing(true);
    setActionMessage(null);
    setActionError(null);
    try {
      const headers: Record<string, string> = {};
      if (savedKey) {
        headers['Authorization'] = `Bearer ${savedKey}`;
      }
      const res = await fetch('/api/instagram/sync', { method: 'POST', headers });
      const data = await res.json();
      if (res.ok && data.success) {
        setActionMessage(`Successfully synced ${data.posts_synced} posts at ${new Date(data.timestamp).toLocaleTimeString()}`);
        fetchStatus(savedKey);
      } else {
        setActionError(data.error || 'Synchronization failed.');
      }
    } catch (err: any) {
      setActionError(err.message || 'Sync network request failed');
    } finally {
      setSyncing(false);
    }
  }

  async function handleDisconnect() {
    if (!confirm('Are you sure you want to disconnect Instagram? Stored access tokens will be removed.')) {
      return;
    }
    setActionMessage(null);
    setActionError(null);
    try {
      const headers: Record<string, string> = {};
      if (savedKey) {
        headers['Authorization'] = `Bearer ${savedKey}`;
      }
      const res = await fetch('/api/admin/instagram/disconnect', { method: 'POST', headers });
      const data = await res.json();
      if (res.ok) {
        setActionMessage('Instagram disconnected successfully. Using seed archive data.');
        fetchStatus(savedKey);
      } else {
        setActionError(data.error || 'Failed to disconnect.');
      }
    } catch (err: any) {
      setActionError(err.message || 'Disconnect request failed');
    }
  }

  const state = statusData?.state;
  const isConnected = state?.status === 'CONNECTED';
  const isExpiringSoon = state?.status === 'EXPIRING_SOON';
  const isExpired = state?.status === 'EXPIRED';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg bg-white p-1 border border-slate-200 shadow-xs flex items-center justify-center">
              <Image src="/images/MB_Seal.JPG" alt="Command Deck Crest" width={26} height={26} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">Instagram API Management Console</h1>
              <p className="text-xs text-slate-500 font-mono">Command Deck CQB // @commanddeck Sync Engine</p>
            </div>
          </div>

          <a
            href="/"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors shadow-xs"
          >
            &larr; Back to Website
          </a>
        </div>

        {/* Action Alerts */}
        {actionMessage && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{actionMessage}</span>
          </div>
        )}

        {actionError && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-2.5">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{actionError}</span>
          </div>
        )}

        {/* Admin Authentication Box */}
        <div className="studio-panel rounded-2xl p-6 mb-8 border border-slate-200">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-700 uppercase tracking-wider mb-2">
            <KeyRound className="w-4 h-4" />
            <span>Administrator Security Key</span>
          </div>
          <form onSubmit={handleSaveKey} className="flex flex-col sm:flex-row gap-3">
            <input
              type="password"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              placeholder="Enter ADMIN_SECRET_KEY..."
              className="flex-1 px-4 py-2 text-xs font-mono rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 bg-white"
            />
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors"
            >
              Authenticate
            </button>
            <button
              type="button"
              onClick={() => fetchStatus(savedKey)}
              disabled={loading}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center justify-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh Status</span>
            </button>
          </form>
          <p className="text-[11px] text-slate-500 mt-2">
            Set in your environment variables as <code>ADMIN_SECRET_KEY</code>. Controls manual synchronization and reconnection.
          </p>
        </div>

        {/* Main Status & Diagnostics Dashboard */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Connection Health */}
          <div className="studio-panel rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                Account Status
              </div>
              <div className="flex items-center gap-2.5 mt-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    isConnected
                      ? 'bg-emerald-500 animate-pulse'
                      : isExpiringSoon
                      ? 'bg-amber-500'
                      : 'bg-rose-500'
                  }`}
                />
                <span className="font-bold text-lg text-slate-900 tracking-tight">
                  {state?.status || 'DISCONNECTED'}
                </span>
              </div>
              <div className="text-xs text-slate-600 mt-2 font-medium">
                Target: <span className="font-bold text-slate-900">@commanddeck</span>
              </div>
              {state?.is_seeded_data && (
                <div className="mt-2 text-[10px] font-mono text-amber-700 bg-amber-50 px-2 py-1 rounded border border-amber-200 inline-block">
                  Verified Archive Fallback Active
                </div>
              )}
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-mono">
              Mode: {statusData?.is_configured ? 'Meta API Configured' : 'Missing Env Credentials'}
            </div>
          </div>

          {/* Card 2: Token Lifespan */}
          <div className="studio-panel rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                60-Day Token Lifespan
              </div>
              <div className="text-2xl font-black text-slate-900 font-mono mt-2">
                {state?.token_days_remaining !== null && state?.token_days_remaining !== undefined
                  ? `${state.token_days_remaining} Days`
                  : 'N/A'}
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Automated background refresh occurs when token reaches &le; 15 days remaining.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-mono truncate">
              Token: {statusData?.token_masked || 'None stored'}
            </div>
          </div>

          {/* Card 3: Synchronization Stats */}
          <div className="studio-panel rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                Last Synchronization
              </div>
              <div className="text-sm font-bold text-slate-900 mt-2">
                {state?.last_successful_sync_timestamp
                  ? new Date(state.last_successful_sync_timestamp).toLocaleString()
                  : 'No successful sync yet'}
              </div>
              <div className="text-xs text-slate-600 mt-2">
                Cached Posts: <span className="font-bold text-slate-900">{statusData?.posts_count || 0}</span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-mono">
              Auto-Cron: Every 1 Hour
            </div>
          </div>
        </div>

        {/* Operational Control Panel */}
        <div className="studio-panel rounded-2xl p-6 sm:p-8 mb-8 border border-slate-200">
          <h2 className="text-base font-bold text-slate-900 mb-4 tracking-tight">
            Operational Management Controls
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleSyncNow}
              disabled={syncing}
              className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-xs"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin' : ''}`} />
              <span>{syncing ? 'Syncing...' : 'Sync Now (Reconcile Posts)'}</span>
            </button>

            <a
              href="/api/instagram/auth/login"
              className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-xs"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>{statusData?.has_token ? 'Reconnect Instagram' : 'Connect @commanddeck'}</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {statusData?.has_token && (
              <button
                onClick={handleDisconnect}
                className="px-4 py-2.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-semibold text-xs transition-colors flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Disconnect</span>
              </button>
            )}
          </div>

          {state?.last_error && (
            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono leading-relaxed">
              <strong className="block font-sans text-xs font-bold text-amber-800 mb-1">
                Diagnostic Log / Last Warning:
              </strong>
              {state.last_error}
            </div>
          )}
        </div>

        {/* Step-by-Step Meta Setup Guide & Instructions */}
        <div className="studio-panel rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-700 uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Meta App Setup Instructions</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
            How to Connect @commanddeck Without App Review
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 block font-semibold mb-1">
                1. Create a Meta Developer App
              </strong>
              Navigate to <a href="https://developers.facebook.com" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline font-medium">developers.facebook.com</a> &rarr; <em>My Apps</em> &rarr; <em>Create App</em>. Select app type <strong>Other</strong> &rarr; <strong>Business</strong>.
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 block font-semibold mb-1">
                2. Add the Instagram API Product
              </strong>
              Add <strong>Instagram</strong> product to your App. Select <strong>Business Login for Instagram</strong>.
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 block font-semibold mb-1">
                3. Configure OAuth Redirect URI
              </strong>
              In Instagram Basic Display / Business Login settings, add your OAuth Redirect URI:
              <code className="block mt-1 p-2 rounded bg-white border border-slate-200 font-mono text-xs text-slate-800">
                {statusData?.redirect_uri || 'http://localhost:3008/api/instagram/auth/callback'}
              </code>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 block font-semibold mb-1">
                4. Add @commanddeck as an Authorized Tester (Bypasses App Review!)
              </strong>
              In the Meta App dashboard, go to <strong>App Roles &rarr; Roles &rarr; Instagram Testers</strong> and add <code>commanddeck</code>. Log into Instagram on mobile or web with @commanddeck, go to <em>Settings &rarr; Website permissions &rarr; Apps and Websites &rarr; Tester Invites</em>, and click <strong>Accept</strong>.
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-slate-900 block font-semibold mb-1">
                5. Authorize Connection
              </strong>
              Return to this admin console and click <strong>Connect @commanddeck</strong>. The system will automatically acquire a 60-day token, download media to local cache, and begin scheduled synchronization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
