import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Layout styles
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#feffffff',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#ffffffff',
  },

  // Typography styles with peaceful font weights
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'System',        // Or 'Montserrat-SemiBold' for custom font
    fontWeight: '600',          // Semi-bold (softer than bold)
    color: '#1E293B',
    marginBottom: 20,
    marginTop: 28,
    letterSpacing: 0.3,
  },
  customerName: {
    fontSize: 18,
    fontFamily: 'System',       // Or 'Montserrat-Medium'
    fontWeight: '500',
    color: '#0981ebe1',
    marginBottom: 0,
    letterSpacing: 0.2,
  },

    accountNumber : {
    fontSize: 16,
    fontFamily: 'System',       // Or 'Montserrat-Regular'
    fontWeight: '400',
    color: '#747474ff',
    letterSpacing: 0.1,
  },
  customerEmail: {
    fontSize: 15,
    fontFamily: 'System',       // Or 'Montserrat-Regular'
    fontWeight: '400',
    color: '#747474ff',
    letterSpacing: 0.1,
  },
  balanceText: {
    fontSize: 17,
    fontFamily: 'System',       // Or 'Montserrat-Medium'
    fontWeight: '400',
    color: '#747474ff',
    marginBottom: 10,
  },
  amountText: {
    fontSize: 17,
    fontFamily: 'System',       // Or 'Montserrat-Medium'
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  dateText: {
    fontSize: 15,
    fontFamily: 'System',       // Or 'Montserrat-Regular'
    fontWeight: '400',
    color: '#64748B',
    letterSpacing: 0.1,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: 'System',       // Or 'Montserrat-Regular'
    fontWeight: '400',
    color: '#64748B',
  },
  errorText: {
    fontSize: 16,
    fontFamily: 'System',       // Or 'Montserrat-Medium'
    fontWeight: '500',
    color: '#DC2626',
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontFamily: 'System',       // Or 'Montserrat-Regular'
    fontWeight: '400',
    color: '#64748B',
    textAlign: 'center',
  },

  // Card styles
  listContainer: {
    marginBottom: 20,
  },
  card: {
    marginBottom: 16,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#ffffffc4',
    borderWidth: 1,
    borderColor: '#5b5b5bd4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    color: '#878787ff',
  },
  selectedCard: {
    borderColor: '#166df8ff',
    backgroundColor: '#EFF6FF',
    shadowColor: '#1468f0ff',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  creditCard: {
    backgroundColor: '#ECFDF5',
    borderColor: '#A7F3D0',
  },
  debitCard: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FECACA',
  },

  // Content styles
  cardContent: {
    marginTop: 12,
  },
  customerInfo: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  transactionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  creditText: {
    color: '#059669',
    fontFamily: 'System',       // Or 'Montserrat-Medium'
    fontWeight: '500',
  },
  debitText: {
    color: '#B91C1C',
    fontFamily: 'System',       // Or 'Montserrat-Medium'
    fontWeight: '500',
  },

  // Button styles
  buttonGroup: {
    flexDirection: 'column',
    marginTop: 16,
    justifyContent: 'space-around',
    gap: 15,
    width: '100%',
  },
  actionButton: {
    flex: 2,
    marginVertical: 3,
    backgroundColor: '#138af1cc',
  },
});

export default styles;