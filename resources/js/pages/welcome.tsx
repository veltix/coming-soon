import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [progress, setProgress] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        // Set your project start date (when countdown begins)
        const startDate = new Date('2025-11-13T00:00:00');

        // Set a fixed target date: January 2, 2026 at 00:00:00
        // Change this date to your desired launch date
        const targetDate = new Date('2026-01-02T00:00:00');

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                return {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                };
            }

            return {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            };
        };

        const calculateProgress = () => {
            const now = new Date().getTime();
            const total = targetDate.getTime() - startDate.getTime();
            const elapsed = now - startDate.getTime();

            // Calculate percentage (0-100)
            const percentage = Math.min(
                Math.max((elapsed / total) * 100, 0),
                100
            );

            return percentage;
        };

        setTimeLeft(calculateTimeLeft());
        setProgress(calculateProgress());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
            setProgress(calculateProgress());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Head title="Coming Soon">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=jetbrains-mono:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 font-mono dark:from-black dark:via-slate-950 dark:to-black sm:p-8">
                <div className="flex min-h-screen items-center justify-center">
                    {/* Terminal Window */}
                    <div
                        className={`w-full max-w-4xl overflow-hidden rounded-lg shadow-2xl transition-all duration-1000 ${
                            mounted
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                        }`}
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 border-b border-slate-700/50 bg-slate-800 px-4 py-3 dark:border-slate-900/50 dark:bg-slate-950">
                            <div className="flex gap-2">
                                <div className="h-3 w-3 animate-pulse rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                                <div className="h-3 w-3 animate-pulse rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50 animation-delay-150" />
                                <div className="h-3 w-3 animate-pulse rounded-full bg-green-500 shadow-lg shadow-green-500/50 animation-delay-300" />
                            </div>
                            <div className="ml-4 text-sm text-slate-400 dark:text-slate-600">
                                veltix@terminal: ~
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div className="bg-slate-900 p-6 dark:bg-black sm:p-12">
                            <div className="space-y-6">
                                {/* Command Prompt */}
                                <div
                                    className={`flex items-center gap-2 text-green-400 transition-all duration-700 delay-300 ${
                                        mounted
                                            ? 'translate-x-0 opacity-100'
                                            : '-translate-x-10 opacity-0'
                                    }`}
                                >
                                    <span className="text-purple-400">$</span>
                                    <span className="animate-typing">
                                        ./launch-countdown.sh
                                    </span>
                                    <span className="ml-1 inline-block h-5 w-2 animate-blink bg-green-400" />
                                </div>

                                {/* Output */}
                                <div
                                    className={`space-y-4 transition-all duration-700 delay-500 ${
                                        mounted
                                            ? 'translate-y-0 opacity-100'
                                            : 'translate-y-10 opacity-0'
                                    }`}
                                >
                                    <div className="text-cyan-400">
                                        [INFO] Initializing launch sequence...
                                    </div>
                                    <div className="text-yellow-400">
                                        [WAIT] Something awesome is coming...
                                    </div>

                                    {/* Main Title */}
                                    <div className="my-8 space-y-2 border-l-4 border-purple-500 pl-4">
                                        <h1 className="text-3xl font-bold text-white sm:text-5xl">
                                            COMING SOON
                                        </h1>
                                        <p className="text-lg text-slate-400 sm:text-xl">
                                            We're building something amazing
                                        </p>
                                    </div>

                                    {/* Countdown Timer */}
                                    <div className="my-8 space-y-4">
                                        <div className="text-green-400">
                                            [TIMER] Launch countdown:
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                            <TimerBlock
                                                value={timeLeft.days}
                                                label="DAYS"
                                                mounted={mounted}
                                                delay="delay-700"
                                            />
                                            <TimerBlock
                                                value={timeLeft.hours}
                                                label="HOURS"
                                                mounted={mounted}
                                                delay="delay-[800ms]"
                                            />
                                            <TimerBlock
                                                value={timeLeft.minutes}
                                                label="MINUTES"
                                                mounted={mounted}
                                                delay="delay-[900ms]"
                                            />
                                            <TimerBlock
                                                value={timeLeft.seconds}
                                                label="SECONDS"
                                                mounted={mounted}
                                                delay="delay-1000"
                                            />
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div
                                        className={`space-y-2 transition-all duration-700 delay-1000 ${
                                            mounted
                                                ? 'translate-y-0 opacity-100'
                                                : 'translate-y-10 opacity-0'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between text-blue-400">
                                            <span>[PROGRESS] Building features:</span>
                                            <span className="text-xs">
                                                {progress.toFixed(1)}%
                                            </span>
                                        </div>
                                        <div className="h-4 overflow-hidden rounded-sm border border-slate-700 bg-slate-800 dark:border-slate-800 dark:bg-slate-950">
                                            <div
                                                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-1000 ease-out"
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* Footer Message */}
                                    <div
                                        className={`mt-8 space-y-2 transition-all duration-700 delay-1000 ${
                                            mounted
                                                ? 'translate-y-0 opacity-100'
                                                : 'translate-y-10 opacity-0'
                                        }`}
                                    >
                                        <div className="text-slate-500">
                                            &gt; Stay tuned for updates
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-600">
                                            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
                                            <span>System online</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Terminal Footer */}
                        <div className="border-t border-slate-700/50 bg-slate-800 px-4 py-2 text-xs text-slate-500 dark:border-slate-900/50 dark:bg-slate-950">
                            <div className="flex items-center justify-between">
                                <span>Laravel × React × Inertia</span>
                                <span className="flex items-center gap-2">
                                    <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-purple-500" />
                                    Ready
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animated Background Elements */}
                <div className="pointer-events-none fixed inset-0 overflow-hidden">
                    <div className="absolute -left-20 -top-20 h-96 w-96 animate-float rounded-full bg-purple-500/10 blur-3xl" />
                    <div className="animation-delay-1000 absolute -bottom-20 -right-20 h-96 w-96 animate-float rounded-full bg-cyan-500/10 blur-3xl" />
                    <div className="animation-delay-2000 absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-float rounded-full bg-pink-500/10 blur-3xl" />
                </div>
            </div>
        </>
    );
}

function TimerBlock({
    value,
    label,
    mounted,
    delay,
}: {
    value: number;
    label: string;
    mounted: boolean;
    delay: string;
}) {
    return (
        <div
            className={`group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50 p-4 backdrop-blur-sm transition-all duration-700 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 dark:border-slate-800 dark:bg-slate-950/50 ${delay} ${
                mounted
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
            }`}
        >
            {/* Shine effect on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

            <div className="relative text-center">
                <div className="mb-1 text-3xl font-bold text-white transition-colors group-hover:text-purple-400 sm:text-4xl">
                    {String(value).padStart(2, '0')}
                </div>
                <div className="text-xs font-medium tracking-wider text-slate-500 transition-colors group-hover:text-purple-400">
                    {label}
                </div>
            </div>

            {/* Corner accent */}
            <div className="absolute -right-2 -top-2 h-4 w-4 rotate-45 bg-purple-500/20 transition-all group-hover:bg-purple-500/50" />
        </div>
    );
}
