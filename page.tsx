"use client";
import React, { useState } from 'react';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [role, setRole] = useState<'client' | 'lawyer'>('client');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا سيتم ربط قاعدة البيانات لاحقاً
    alert(`تمت العملية بنجاح كـ ${role === 'lawyer' ? 'محامي' : 'عميل'}`);
  };

  if (showLogin) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" dir="rtl">
        <div className="sm:mx-auto sm:w-full sm:max-area-w">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isSignUp ? 'إنشاء حساب جديد' : 'تسجيل الدخول إلى المنصة'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            أو{' '}
            <button onClick={() => setIsSignUp(!isSignUp)} className="font-medium text-indigo-600 hover:text-indigo-500">
              {isSignUp ? 'لديك حساب بالفعل؟ سجل دخولك' : 'ليس لديك حساب؟ سجل الآن مجاناً'}
            </button>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md p-4">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            {/* اختيار نوع الحساب */}
            <div className="flex justify-center space-x-4 space-x-reverse mb-6">
              <button 
                onClick={() => setRole('client')}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${role === 'client' ? 'bg-indigo-600 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                أنا عميل (أبحث عن محامي)
              </button>
              <button 
                onClick={() => setRole('lawyer')}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${role === 'lawyer' ? 'bg-indigo-600 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                أنا محامي
              </button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">الاسم الكامل</label>
                  <div className="mt-1">
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-right" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                <div className="mt-1">
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-right" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">كلمة المرور</label>
                <div className="mt-1">
                  <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-right" />
                </div>
              </div>

              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {isSignUp ? 'تأكيد إنشاء الحساب' : 'دخول'}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <button onClick={() => setShowLogin(false)} className="text-sm text-gray-500 hover:text-gray-700">
                ← العودة للصفحة الرئيسية
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center" dir="rtl">
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-4">MASTER V1</span>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">منصة قانونية تجمع<br />المحامي والعميل والقضية.</h1>
      <p className="text-gray-600 max-w-md mb-8">ابحث عن المحامين في المحافظات العراقية وأدر القضايا والوثائق والمواعيد من نظام واحد.</p>
      
      <div className="flex space-x-4 space-x-reverse mb-12">
        <button onClick={() => { setShowLogin(true); setIsSignUp(false); }} className="bg-black text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-800 transition-all">ابدأ التجربة</button>
        <button onClick={() => { setShowLogin(true); setIsSignUp(true); }} className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium shadow-sm hover:bg-gray-50 transition-all">تصفح المحامين</button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full max-w-sm text-right">
        <h3 className="font-bold text-gray-900 mb-4">بحث سريع</h3>
        <input type="text" placeholder="اسم المحامي أو الاختصاص أو المحافظة..." className="w-full border border-gray-200 rounded-xl p-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right" />
        <div className="flex flex-wrap gap-2 mb-4 justify-start">
          {['بغداد', 'البصرة', 'ميسان', 'جنائي', 'مدني'].map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-medium cursor-pointer hover:bg-gray-200">{tag}</span>
          ))}
        </div>
        <p className="text-xs text-gray-400">البحث جاهز للربط بقاعدة البيانات المركزية.</p>
      </div>
    </div>
  );
}
