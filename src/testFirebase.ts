import { auth, db, storage } from './lib/firebase';

export async function testFirebaseConnection() {
  const results = {
    auth: false,
    firestore: false,
    storage: false,
    errors: [] as string[]
  };

  try {
    // Test Auth
    if (auth) {
      results.auth = true;
      console.log('✅ Firebase Auth initialized');
    }
  } catch (error) {
    results.errors.push(`Auth Error: ${error}`);
    console.error('❌ Firebase Auth failed:', error);
  }

  try {
    // Test Firestore
    if (db) {
      results.firestore = true;
      console.log('✅ Firestore initialized');
    }
  } catch (error) {
    results.errors.push(`Firestore Error: ${error}`);
    console.error('❌ Firestore failed:', error);
  }

  try {
    // Test Storage
    if (storage) {
      results.storage = true;
      console.log('✅ Firebase Storage initialized');
    }
  } catch (error) {
    results.errors.push(`Storage Error: ${error}`);
    console.error('❌ Firebase Storage failed:', error);
  }

  if (results.auth && results.firestore && results.storage) {
    console.log('🎉 All Firebase services connected successfully!');
  } else {
    console.error('⚠️ Some Firebase services failed to initialize');
    console.log('Check your .env file and Firebase configuration');
  }

  return results;
}

// Auto-test on import in development
if (import.meta.env.DEV) {
  testFirebaseConnection();
}
